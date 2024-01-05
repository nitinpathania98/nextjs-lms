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
    axios.get("http://192.168.1.16/api/User/UserDetail")
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
      <div className="flex items-center justify-center">
        {/* <div className="bg-gray-200 p-4 rounded-md shadow-md w-full max-w-md">
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
          </div> */}
        <div className="profile">
          <div className="middleSection h-full m-auto w-full flex flex-col  p-2 gap-6  ">

            {/* <div className="firstSection flex justify-between items-center">
              <div>
                <h1 className="text-2xl ">Your Info</h1>
              </div>
              <div className="flex flex-row  text-justify  gap-1">
                <div className="flex  items-center"><MdSecurity size={24} /></div>
                <div className="mr-20">
                  <h3 className="text-l  font-semibold ">change password</h3>
                  <p className="text-l " style={{marginTop: "-6px;"}} >security</p>
                </div>
              </div>
            </div>

            <div className="photoInfo firstSection flex justify-between items-center rounded-lg  border-2 border-green-950 bg-gray-200  p-3 ">
              <div>
                <h1 className="font-bold">Your Info</h1>
              </div>
              <div className="flex flex-row  text-justify  gap-1">
                <div className="flex  items-center"><MdSecurity size={25} /></div>
                <div className="mr-10">
                  <h3 className="font-semibold ">change password</h3>
                  <p className="">security</p>
                </div>
              </div>
            </div> */}

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


          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
