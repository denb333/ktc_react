import { useQuery, useMutation, useQueryClient, type UseQueryResult} from "@tanstack/react-query";
import type { IEmployee, IEmployeeListResponse } from "../enums/employee";
import { createEmployee, fetchEmployees, updateEmployee, deleteEmployee } from "../services/EmployeeService";

export const useEmployees = (
    page: number,
    size: number
): UseQueryResult<IEmployeeListResponse, Error> => {
    return useQuery<IEmployeeListResponse, Error>({
        queryKey: ["employees", page, size],
        queryFn: () => fetchEmployees(page, size),
       
    });
};
export const useAddEmployee = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createEmployee,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["employees"] });
        },
    });
};
export const useUpdateEmployee = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, employee }: { id: number; employee: Partial<IEmployee> }) =>
            updateEmployee(id, employee),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["employees"] });
        },
    });
};
export const useDeleteEmployee = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteEmployee,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["employees"] });
        },
    });
};
