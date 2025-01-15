import axios from 'axios'
import { Api } from '../../../shared/config/index'

interface IStudentData {
  id: string;
  name: string;
}

export const fetchStudent = async (id: string): Promise<IStudentData> => {
  const response = await axios.get<IStudentData>(`${Api}/students/${id}`)
  return response.data
}