"use client"
import React, { useEffect, useState } from "react";
import { BASE_URL } from "@/services/baseUrl";
import { UserDetails } from "@/services/api";
import EmployeeDetailsTemplate from "./EmployeeDetailsTemplate";
import { EmployeeDetailsInterface } from "./EmployeeDetailsInterface";

const initialValues = {
  userName: "",
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
        const storedToken = localStorage.getItem('token');
        console.log('Stored Token:', storedToken);
        if (!storedToken) {
          console.error('Token not found. Redirect to login page.');
          return;
        }

        const response = await fetch('http://localhost:8080/api/users/user/details', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${storedToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userDetails = await response.json();
          console.log('User details:', userDetails);
          setEmployeeDetails(userDetails);
        } else if (response.status === 401) {
          console.error('Unauthorized. Redirect to login page or renew token.');
        } else {
          // Handle other errors
          console.error('Failed to fetch user details');
        }
      } catch (error: any) {
        console.error('Error fetching user details:', error.message);
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
