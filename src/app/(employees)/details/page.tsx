"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdSecurity } from "react-icons/md";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { BASE_URL } from "@/services/baseUrl";
import { UserDetails } from "@/services/api";

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
    const fetchUserDetails = async () => {
      try {
        const url = `${BASE_URL}userDetail`;
        const response = await UserDetails(url, employeeDetails)
        console.log(response)
        setEmployeeDetails(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };

    fetchUserDetails();
  }, []);
  //   axios.get("http://192.168.1.13/api/User/UserDetail")
  //     .then((res) => {
  //       setEmployeeDetails(res.data)
  //       console.log(res.data);

  //     })
  //     .catch(error => {
  //       console.error('Error fetching data: ', error);
  //     });
  // }, [])

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navbar />
          <div className="mx-auto max-w-screen-2xl p-4 md:p-2 2xl:p-5">
            <div className='w-auto  '>
              <div className='p-1 '>
                {employeeDetails.length > 0 && employeeDetails.map((result:any, index) => (
                  <div key={result} className="middleSection  h-full  w-11/12 m-auto flex flex-col  p-2 gap-6  ">
                    <div className="firstSection  flex justify-between items-center">
                      <div>
                        <h1 >Your Info</h1>
                      </div>
                      <div className="flex flex-row text-justify  gap-1">
                        <div className="flex  items-center"><MdSecurity size={24} /></div>
                        <div className="mr-20">
                          <h3 className="font-medium">change Password</h3>
                          <p className="text-l -mt-1 ">Security</p>
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
                          <button>Change Photo</button>
                        </div>
                        <div className="grid"></div>
                      </div>
                      <hr />
                      <div className="grid grid-cols-3 gap-1 p-4">
                        <div>
                          <p className="mt-1 max-w-2xl text-sm text-gray-500 w-1/4">
                            Full Name
                          </p>
                        </div>
                        <div><h3>{result.name}</h3> </div>
                        <div className="flex justify-end">
                          <button className="edit">
                            Edit Name
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* info section  */}
                    <div className="photoInfo flex flex-col  rounded-lg   bg-white   gap-2 shadow-2xl  ">

                      <div className="grid grid-cols-2 items-center gap-1 p-4">
                        <div>
                          <h3>Profile Info</h3>
                        </div>
                        <div className="flex justify-end">
                          <button className="edit">
                            Edit Profile Info
                          </button>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4  items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm text-gray-500">
                            Date of Birth
                          </p>
                        </div>
                        <div className="">
                          <h3>21 / 11 / 1998</h3>
                        </div>
                        <div className="col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            Your date of birth is used for account safety setting
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm text-gray-500">
                            Country or region
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.country}</h3>
                        </div>
                        <div className=" col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            Your country and region are used for privacy settings
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm  text-gray-500">
                            Language
                          </p>
                        </div>
                        <div className="">
                          <h3>English(US)</h3>
                        </div>
                        <div className=" col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            Ask me before translating
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>

                    {/* Personal Details */}

                    <div className="photoInfo flex flex-col  rounded-lg   bg-white   gap-2 shadow-2xl  ">

                      <div className="grid grid-cols-2 items-center gap-1 p-4">
                        <div>
                          <h3>Account Info</h3>
                        </div>
                        <div className="flex justify-end">
                          <button className="edit">
                            Edit Account Info
                          </button>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4  items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm text-gray-500">
                            Email
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.email}</h3>
                        </div>
                        <div className="col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            This is your Primary Email Address
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm text-gray-500">
                            Phone No.
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.phoneNumber}</h3>
                        </div>
                        <div className=" col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            This Number will be used to contact you
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm  text-gray-500">
                            Password
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.password}</h3>
                        </div>
                        <div className=" col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            Keep changing your password in 3 months.
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>

                    <div className="photoInfo flex flex-col  rounded-lg   bg-white   gap-2 shadow-2xl  ">


                      <div className="grid grid-cols-2 items-center gap-1 p-4">
                        <div>
                          <h3>Personal Details</h3>
                        </div>
                        <div className="flex justify-end">
                          <button className="edit">
                            Edit Details
                          </button>
                        </div>
                      </div>
                      <hr />


                      <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm  text-gray-500">
                            Department
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.department}</h3>
                        </div>
                        <div className=" col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            Current Place
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm  text-gray-500">
                            Designation
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.designation}</h3>
                        </div>
                        <div className=" col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            Current Place
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4  items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm text-gray-500">
                            Country
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.country}</h3>
                        </div>
                        <div className="col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            This is your Primary Email Address
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm text-gray-500">
                            State
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.state}</h3>
                        </div>
                        <div className=" col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            This Number will be used to contact you
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm  text-gray-500">
                            City
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.city}</h3>
                        </div>
                        <div className=" col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            Current Place
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="w-full grid grid-cols-4 items-center gap-1 p-4">
                        <div className="">
                          <p className="mt-1 text-sm  text-gray-500">
                            Full Address
                          </p>
                        </div>
                        <div className="">
                          <h3>{result.address}</h3>
                        </div>
                        <div className=" col-span-2">
                          <p className="mt-1 text-sm text-gray-500">
                            Permanent Address
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
