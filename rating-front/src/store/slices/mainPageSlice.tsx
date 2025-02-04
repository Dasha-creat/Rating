import { createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "../api/fetchStudents";
import { fetchGroups } from "../api/fetchGroups"; 

interface IStudent {
    name: string;
    id: string;
    groupName: string;
}

interface IGroup {
    name: string;
    id: string;
}

interface IMainPageState {
    students: IStudent[];
    groups: IGroup[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: IMainPageState = {
    students: [],
    groups: [],
    status: 'idle',
    error: null,
};

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchStudents.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchStudents.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.students = action.payload; 
        })
        .addCase(fetchStudents.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to load students';
        })
        .addCase(fetchGroups.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchGroups.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.groups = action.payload;
        })
        .addCase(fetchGroups.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to load groups';
        });
    }
});

export default mainPageSlice.reducer;