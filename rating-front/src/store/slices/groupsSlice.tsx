import { createSlice } from "@reduxjs/toolkit";
import { fetchGroups } from "../api/fetchGroups";

interface IGroupState {
    groups: {name: string; id: string;}[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: IGroupState = {
    groups: [],
    status: 'idle',
    error: null,
};

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
        })
    }
});

export default groupsSlice.reducer;