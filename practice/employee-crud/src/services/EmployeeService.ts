
import axios from "axios";
import type {
  ICreateEmployeeResponse,
  IEmployee,
  IEmployeeDto,
  IEmployeeListResponse,
  IUpdateEmployeeResponse,
} from "../enums/employee";

const API_BASE_URL = "http://localhost:8080/api/employees";


export const fetchEmployees = async (
  page: number,
  size: number
): Promise<IEmployeeListResponse> => {
  const response = await axios.get<IEmployeeListResponse>(
    `${API_BASE_URL}?page=${page - 1}&size=${size}`
  );
  return response.data;
};


export const createEmployee = async (
  employee: IEmployeeDto
): Promise<IEmployee> => {
  const response = await axios.post<ICreateEmployeeResponse>(
    API_BASE_URL,
    employee
  );
  return response.data.data;
};


export const updateEmployee = async (
  id: number,
  employee: Partial<IEmployeeDto>
): Promise<IEmployee> => {
  const response = await axios.put<IUpdateEmployeeResponse>(
    `${API_BASE_URL}/${id}`,
    employee
  );
  return response.data.data;
};


export const deleteEmployee = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
