import { takeEvery, call, put } from "redux-saga/effects";
import { fetchStudents, fetchGroups } from "../../shared/api";
import { MainPageActions } from "./index";

export function* loadStudentsAndGroups(): Generator {

    try {
        const students = yield call(fetchStudents);
        const groups = yield call(fetchGroups);
        
        yield put(MainPageActions.loadStudentsFulfilled(students));
        yield put(MainPageActions.loadingGroupsFulfilled(groups));
    } catch (error) {
        yield put(MainPageActions.loadStudentsFailed(error.message));
        yield put(MainPageActions.loadingGroupsFailed(error.message));
    }
}

function* init() {
    yield put(MainPageActions.loadStudentsPending());
    yield put(MainPageActions.loadGroupsPending());
}

export function* watchLoadStudentsAndGroups(): Generator {
    yield takeEvery(MainPageActions.loadStudentsPending.type, loadStudentsAndGroups);
    yield takeEvery(MainPageActions.loadGroupsPending.type, loadStudentsAndGroups); 
    yield call(init);
}