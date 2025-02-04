import { combineReducers } from 'redux';
import mainPageReducer from './slices/mainPageSlice';
import studentsSlice from './slices/studentsSlice';
import groupsSlice from './slices/groupsSlice';

const rootReducer = combineReducers({
    mainPage: mainPageReducer,
    students: studentsSlice,
    groups: groupsSlice
});

export default rootReducer;