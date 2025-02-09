import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainPageState {
    students: Array<{ name: string; id: string; }>;
    groups: Array<{name: string; id: number;}>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MainPageState = {
    students: [],
    groups: [],
    status: 'idle',
    error: null,
}

export const { reducer, actions } = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        loadStudentsPending: (state) => {
            state.status = 'loading';
        },
        loadStudentsFulfilled: (state, action: PayloadAction<Array<{ name: string; id: string; }>>) => {
            state.status = 'succeeded';
            state.students = action.payload;
        },
        loadStudentsFailed: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        loadGroupsPending: (state) => {
            state.status = 'loading';
        },
        loadingGroupsFulfilled: (state, action: PayloadAction<Array<{name: string; id: number;}>>) => {
            state.status = 'succeeded';
            state.groups = action.payload;
        },
        loadingGroupsFailed: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    },
});