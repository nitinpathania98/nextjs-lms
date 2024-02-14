"use client"
import React, { useEffect, useState } from "react";
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
  const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetailsInterface[]>([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        let accessToken = localStorage.getItem('accessToken');
        let refreshToken = localStorage.getItem('refreshToken');

        if (!accessToken || !refreshToken) {
          console.error('Token not found. Redirect to login page.');
          return;
        }

        const response = await fetch('http://localhost:8080/api/users/user/details', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userDetails = await response.json();
          setEmployeeDetails(userDetails);
          console.log(userDetails);
        } else if (response.status === 401) {
          // Token expired, try refreshing the token
          const refreshResponse = await fetch('http://localhost:8080/api/refresh', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${refreshToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (refreshResponse.ok) {
            const { accessToken: newAccessToken } = await refreshResponse.json();
            localStorage.setItem('token', newAccessToken);
            // Retry fetching user details with the new access token
            fetchUserDetails();
          } else {
            console.error('Failed to refresh token. Redirect to login page.');
          }
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error: any) {
        console.error('Error fetching user details:', error.message);
      }
    };

    fetchUserDetails();
  }, []);
  const openEditPopup = (user: any) => {
    // setSelectedUser(user);
    // setModal(true);
  };
  return (
    <>
      <EmployeeDetailsTemplate
        employeeDetails={employeeDetails}
        id={""}
        userName={""}
        email={""}
        password={""}
        designation={""}
        department={""}
        phoneNumber={""}
        country={""}
        state={""}
        city={""}
        address={""}
        openEditPopup={openEditPopup}
      />
    </>
  );
};

export default EmployeeDetailsComponent;
