"use client"
import React, { useEffect, useState } from "react";
import { BASE_URL } from "@/services/baseUrl";
import { UserDetails } from "@/services/api";
import EmployeeDetailsTemplate from "./EmployeeDetailsTemplate";
import { EmployeeDetailsInterface } from "./EmployeeDetailsInterface";

const initialValues = {
  name: "",
  email: "",
  password: "",
  designation: "",
  department: "",
  phoneNumber: "",
  country: "",
  state: "",
  city: "",
  address: "",
};

const EmployeeDetailsComponent: React.FC = () => {
  const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetailsInterface['employeeDetails']>([initialValues]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const url = `${BASE_URL}userDetail`;
        const response = await UserDetails(url)
        console.log(response)
        setEmployeeDetails(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <>
      <EmployeeDetailsTemplate
        employeeDetails={employeeDetails}
      />
    </>
  );
};

export default EmployeeDetailsComponent;
