"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdSecurity } from "react-icons/md";

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
    // const fetchData = async () => {
    //     try {
    //       const response = await axios.get("http://192.168.1.16/api/User/UserDetail");
    //       setEmployeeDetails(response.data);
    //     } catch (error) {
    //       console.error("Error fetching employee details:", error);
    //     }
    //   };

    //   fetchData();
    // }, []);
    axios.get("http://192.168.1.16/api/userDetail")
      .then((res) => {
        setEmployeeDetails(res.data)
        console.log(res);

      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [])

  return (
    <>

      <div className="bg-gray-200 p-4 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-xl md:text-2xl mb-4">Employee Details</h2>
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



      <div className="middleSection  h-full  w-11/12 m-auto flex flex-col  p-2 gap-6  ">
        <div className="firstSection  flex justify-between items-center">
          <div>
            <h1 className="text-2xl ">Your Info</h1>
          </div>
          <div className="flex flex-row  text-justify  gap-1">
            <div className="flex  items-center"><MdSecurity size={24} /></div>
            <div className="mr-20">
              <h3 className="text-l  font-semibold ">change Password</h3>
              <p className="text-l " style={{ marginTop: "-6px;" }} >Security</p>
            </div>
          </div>
        </div>

        {/* photo section */}
        <div className="photoInfo flex flex-col  rounded-lg   bg-white   gap-2 shadow-2xl  ">

          <div className="flex flex-row p-4">
            <div className="w-1/5">
              <img
                className="w-40 h-40 rounded-full shadow-lg"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="Bonnie image"
              />
            </div>
            <div className="flex flex-col justify-center w-2/4">
              <p>Personalize your account with a photo. Your profile photo will appear on apps and devices that use your Cipher-Studio account.</p>
              <button className="bg-gray-200 max-w-fit  border-2 border-slate-300 p-1">Change Photo</button>
            </div>
            <div className="grid"></div>
          </div>
          <hr className="bg-black border-1 border-r-1 w-full" />
          <div className="grid grid-cols-3 gap-1 p-4">
            <div>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 w-1/4">
                Full Name
              </p>
            </div>
            <div><h3 className="text-l  font-semibold w-3/4">Nitin Singh</h3> </div>
            <div className="flex justify-end">
              <p className="mt-1 max-w-2xl text-sm flex justify-end text-blue-500 w-1/4">
                Edit Name
              </p>
            </div>
          </div>
        </div>

        {/* info section  */}
        <div className="photoInfo flex flex-col  rounded-lg   bg-white   gap-2 shadow-2xl  ">

          <div className="grid grid-cols-2 items-center gap-1 p-4">
            <div>
              <h3 className="mt-1 text-l  font-semibold w-3/4">Profile Info</h3>
            </div>
            <div className="flex justify-end">
              <p className="mt-1 max-w-2xl text-sm flex justify-end text-blue-500 w-1/4">
                Edit Profile Info
              </p>
            </div>
          </div>
          <hr className="bg-black border-1 border-r-1 w-full" />

          <div className="w-full grid grid-cols-4  items-center gap-1 p-4">
            <div className="">
              <p className="mt-1 text-sm text-gray-500">
                Date of Birth
              </p>
            </div>
            <div className="">
              <h3 className="text-l  font-semibold ">21/11/1998</h3>
            </div>
            <div className="col-span-2">
              <p className="mt-1 text-sm text-gray-500">
                Your date of birth is used for account safety setting
              </p>
            </div>
          </div>
          <hr className="bg-black border-1 border-r-1 w-full" />

          <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
            <div className="">
              <p className="mt-1 text-sm text-gray-500">
                Country or region
              </p>
            </div>
            <div className="">
              <h3 className="text-l  font-semibold ">India</h3>
            </div>
            <div className=" col-span-2">
              <p className="mt-1 text-sm text-gray-500">
                Your country and region are used for privacy settings
              </p>
            </div>
          </div>
          <hr className="bg-black border-1 border-r-1 w-full" />

          <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
            <div className="">
              <p className="mt-1 text-sm  text-gray-500">
                Language
              </p>
            </div>
            <div className="">
              <h3 className="text-l  font-semibold ">English(US)</h3>
            </div>
            <div className=" col-span-2">
              <p className="mt-1 text-sm text-gray-500">
                Ask me before translating
              </p>
            </div>
          </div>
          <hr className="bg-black border-1 border-r-1 w-full" />
        </div>

        {/* Account info */}

        <div className="photoInfo flex flex-col  rounded-lg   bg-white   gap-2 shadow-2xl  ">

          <div className="grid grid-cols-2 items-center gap-1 p-4">
            <div>
              <h3 className="mt-1 text-l  font-semibold w-3/4">Account Info</h3>
            </div>
            <div className="flex justify-end">
              <p className="mt-1 max-w-2xl text-sm flex justify-end text-blue-500 w-1/4">
                Edit Account Info
              </p>
            </div>
          </div>
          <hr className="bg-black border-1 border-r-1 w-full" />

          <div className="w-full grid grid-cols-4  items-center gap-1 p-4">
            <div className="">
              <p className="mt-1 text-sm text-gray-500">
                Email
              </p>
            </div>
            <div className="">
              <h3 className="text-l  font-semibold ">nitin@gmail.com</h3>
            </div>
            <div className="col-span-2">
              <p className="mt-1 text-sm text-gray-500">
                This is your Primary Email Address
              </p>
            </div>
          </div>
          <hr className="bg-black border-1 border-r-1 w-full" />

          <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
            <div className="">
              <p className="mt-1 text-sm text-gray-500">
                Phone No.
              </p>
            </div>
            <div className="">
              <h3 className="text-l  font-semibold ">+91*********</h3>
            </div>
            <div className=" col-span-2">
              <p className="mt-1 text-sm text-gray-500">
                This Number will be used to contact you
              </p>
            </div>
          </div>
          <hr className="bg-black border-1 border-r-1 w-full" />

          <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
            <div className="">
              <p className="mt-1 text-sm  text-gray-500">
                Password
              </p>
            </div>
            <div className="">
              <h3 className="text-l  font-semibold ">********</h3>
            </div>
            <div className=" col-span-2">
              <p className="mt-1 text-sm text-gray-500">
                Keep changing your password in 3 months.
              </p>
            </div>
          </div>
          <hr className="bg-black border-1 border-r-1 w-full" />
        </div>
      </div>


      <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-xl md:text-2xl mb-4">Employee Details</h2>

          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Details and informations about Employee.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Full name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Mickael Poulaz
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                m.poul@example.com
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Password
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                *******
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                +919876543210
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Department
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Web Developer
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Designation
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Intern
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Country
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                India                      </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                State
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Punjab
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                City
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Mohali
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Full Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
              </dd>
            </div>
          </dl>
        </div>
      </div>




    </>
  );
};

export default Details;
