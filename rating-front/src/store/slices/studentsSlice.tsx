import { createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "../api/fetchStudents";

interface IStudentState {
    students: { name: string; id: string, groupName: string }[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: IStudentState = {
    students: [],
    status: 'idle',
    error: null,
};

const studentsSlice = createSlice({
    name: 'students',
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
    }
});

export default studentsSlice.reducer;