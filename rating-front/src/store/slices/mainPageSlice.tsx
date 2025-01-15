import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from '../../shared/config/index';

export const fetchStudents = createAsyncThunk(
    'mainPage/fetchStudents',
    async () => {
        const response = await axios.get(`${Api}/students`);
        return response.data;
    }
);

export const fetchGroups = createAsyncThunk(
    'mainPage/fetchGroups',
    async () => {
        const response = await axios.get(`${Api}/groups`);
        return response.data;
    }
);

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState: {
        students: [],
        groups: [],
        status: 'idle',
        error: null as string | null | undefined,
    },
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
            state.error = action.error.message;
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
            state.error = action.error.message;
        })
    }
});

export default mainPageSlice.reducer;