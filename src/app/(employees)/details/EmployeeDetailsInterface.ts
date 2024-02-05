import { Key } from "react";

export interface EmployeeDetailsInterface {
  employeeDetails: {
    id: Key | null | undefined;
    userName: string;
    email: string;
    password: string;
    designation: string;
    department: string;
    phoneNumber: string;
    country: string;
    state: string;
    city: string;
    address: string;
  }[];
}