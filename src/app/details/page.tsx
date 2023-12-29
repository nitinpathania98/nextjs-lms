"use client"
// components/Details.tsx
// components/Details.tsx
// components/Details.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseLayout from "@/app/components/BaseLayout";
import Navbar from "../components/Navbar";

interface EmployeeDetails {
  name: string;
  email: string;
  password: string;
  designation: string;
  department: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  address: string;
}

const Details: React.FC = () => {
  const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetails[]>([]);

  useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get("http://192.168.1.16/api/User");
    //       setEmployeeDetails(response.data);
    //     } catch (error) {
    //       console.error("Error fetching employee details:", error);
    //     }
    //   };

    //   fetchData();
    // }, []);
    axios.get("http://192.168.1.16/api/User/UserDetail")
      .then((res) => {
        setEmployeeDetails(res.data)
        console.log(res.data);

      })
  }, [])

  return (
    <>
      <BaseLayout>
        <div className="sticky">
          <Navbar />
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-gray-200 p-4 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Employee Details</h2>
            <h3 className="mt-1 max-w-2xl text-bold text-gray-500">
              This is the information about the employee.
            </h3>


            <div className="container py-5 px-5">
              <div className="row">

                {employeeDetails.map((result, index) => (
                  <div key={index} className="col-lg-4 border px-2 py-2">
                    <p className="font-semibold">Name: {result.name}</p>
                    <p>Email: {result.email}</p>
                    <p>Password: {result.password}</p>
                    <p>Designation: {result.designation}</p>
                    <p>Department: {result.department}</p>
                    <p>PhoneNumber: {result.phoneNumber}</p>
                    <p>Country: {result.country}</p>
                    <p>City: {result.city}</p>
                    <p>State: {result.state}</p>
                    <p>Address: {result.address}</p>
                  </div>
                ))}

              </div>
            </div>
          </div>



        </div>
        {/* <div className="bg-gray-200  container">
          <div className="row">
            <div className="container">
              <div className="flex justify-between">
                <div><h2>Your Info</h2></div>
                <div><h3>Change Password</h3></div>

              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div> */}
      </BaseLayout>
    </>
  );
};

export default Details;
