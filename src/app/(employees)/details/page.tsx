"use client"
import React, { useEffect, useState } from "react";
import { UserDetails } from "@/services/api";
import EmployeeDetailsTemplate from "./EmployeeDetailsTemplate";
import { EmployeeDetailsInterface } from "./EmployeeDetailsInterface";
import PersonalDetailsComponent from "../personalDetails/page";

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
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModal, setModal] = useState<boolean>(false);
  const [formData, setFormData] = useState(initialValues);

  const fetchUserDetails = async () => {
    try {
      let accessToken = localStorage.getItem('accessToken');
      let refreshToken = localStorage.getItem('refreshToken');

      if (!accessToken) {
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
        console.log("userDEtails", userDetails);
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
  useEffect(() => {


    fetchUserDetails();
  }, [isModal]);

  const openEditPopup = (user: any) => {
    console.log("Selected User:", user);
    setSelectedUser(user);
    setFormData(user);
    setModal(true);
  };
  const handleClosePopup = () => {
    setModal(false);
  };

  const handleFormSubmit = async (updatedData: any) => {
    // Logic to update user details
    try {
      // Make API call to update user details
      // Example:
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch('http://localhost:8080/api/users/update', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      // If update is successful, update the formData state
      // and refetch user details
      if (response.ok) {
        setFormData(updatedData);
        fetchUserDetails();
      } else {
        console.error('Failed to update user details');
      }
    } catch (error: any) {
      console.error('Error updating user details:', error.message);
    }
  };
  const handleEditUserUpdate = () => {
    setModal(false);
  };
  return (
    <>
      <PersonalDetailsComponent
        isModal={isModal}
        handleClose={handleClosePopup}
        user={selectedUser}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleFormSubmit}
        onUpdate={handleEditUserUpdate}
        onChangeData={function (e: any): void {
          throw new Error("Function not implemented.");
        } } formdata={{
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
          id: "",
          UserId: ""
        }} country={undefined} state={[]} city={[]}      />

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
        UserId={""}
      />
    </>
  );
};

export default EmployeeDetailsComponent;
