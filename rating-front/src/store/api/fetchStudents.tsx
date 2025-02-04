import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../../shared/config";

interface IStudent {
    name: string;
    id: string;
    groupName: string;
};

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents',
    async () => {
        const response = await axios.get<IStudent[]>(`${Api}/students`);
        return response.data;
    }
);