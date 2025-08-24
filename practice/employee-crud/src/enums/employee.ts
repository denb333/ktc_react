export interface IEmployeeDto{
    fullName: string;
    email: string;
    dateOfBirth: string;
    gender: "MALE" | "FEMALE";
    phoneNumber: string;
    active: boolean;

}
export interface IEmployee extends IEmployeeDto{
    id: number;
    createdAt: string;
    updatedAt: string;
}
export interface IEmployeeListResponse {
    success: boolean;
    message: string;
    data: {
        size: number;
        totalPages: number;
        page: number;
        content: IEmployee[];
        totalElements: number;
    };
}

export interface ICreateEmployeeResponse{
    success: boolean;
    message: string;
    data: IEmployee;
}
export interface IUpdateEmployeeResponse{
    success: boolean;
    message: string;
    data: IEmployee;
}