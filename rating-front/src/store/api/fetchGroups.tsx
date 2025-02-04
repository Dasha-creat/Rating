import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../../shared/config";

interface IGroup {
    name: string;
    id: string;
};

export const fetchGroups = createAsyncThunk(
    'groups/fetchGroups',
    async () => {
        const response = await axios.get<IGroup[]>(`${Api}/groups`);
        return response.data;
    }
);