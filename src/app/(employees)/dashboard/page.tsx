/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { MdPendingActions } from 'react-icons/md';
import { GrCompliance } from "react-icons/gr";
import { SiVirustotal } from "react-icons/si";
import { CgUnavailable } from "react-icons/cg";
import { FaHourglassHalf, FaBriefcaseMedical } from "react-icons/fa";
import { FaArrowDownShortWide } from "react-icons/fa6";

const DashboardPage = () => {
    return (
        <>
            <div className='w-auto  '>
                <div className='p-5 '>
                    <div className=" card rounded-lg shadow bg-card p-2 my-2 bg-gray-200">
                        {/* Header Section */}
                        <div className="flex justify-between items-center my-2">
                            <div className="flex items-center">
                                <div className="p-1 w-1 h-[30px] bg-themeColor rounded-lg shadow" />
                                <div className="text-textColor text-lg mx-2">Employee Details</div>
                            </div>

                            <button className="flex items-center text-white text-sm text-center bg-themeColor p-2 rounded-lg"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-white mx-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> <div>January 2, 2024</div></button>
                        </div>

                        {/* Employee Information Section */}
                        <div className="flex mb-2 items-center">
                            <div>
                                <img
                                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                                    alt="Bonnie image"
                                />
                            </div>

                            {/* Employee Name and Table Section */}
                            <div className="mx-2">
                                <div className="text-textColor  mb-2 px-6 py-3"><h2 className='text-xl md:text-2xl'>John Doe</h2></div>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left ">
                                        <thead className="text-xs text-gray-500 uppercase bg-transparent">
                                            <tr>
                                                <td scope="col" className="px-6 py-3 ">
                                                    Role
                                                </td>
                                                <td scope="col" className="px-6 py-3">
                                                    Phone No
                                                </td>
                                                <td scope="col" className="px-6 py-3">
                                                    Email Address
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-transparent text-textColor">
                                                <th className="px-6 py-4 font-md">Web Dev</th>
                                                <th className="px-6 py-4 font-md">(+92) 312 1211232</th>
                                                <th className="px-6 py-4 font-md">johndoe@example.com</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Additional Details Section */}
                        <div className="mb-2 flex flex-wrap justify-even gap-10 w-  p-2">
                            <div className="mb-2">
                                <div className="card p-3 rounded-lg bg-gray-300">
                                    <div className="flex items-center md:w-[220px] w-full">
                                        <div className="icon p-2 bg-gray-200 rounded-full text-center">
                                            <GrCompliance />
                                        </div>
                                        <div className="mx-2">
                                            <div className="mx-2 mb-2"> 20 </div>
                                            <div className="text-xs font-light">Total Leaves </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            {/* Pending Leave Requests Card */}
                            <div className="mb-2">
                                <div className="card p-3 rounded-lg bg-gray-300">
                                    <div className="flex items-center md:w-[220px] w-full">
                                        <div className="icon p-2 bg-gray-200 rounded-full text-center">
                                            <MdPendingActions />
                                        </div>
                                        <div className="mx-2">
                                            <div className="mx-2 mb-2"> 3 </div>
                                            <div className="text-xs font-light"> Pending Leave Requests </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Similar structure for other cards */}
                            <div className="mb-2">
                                <div className="card p-3 rounded-lg bg-gray-300">
                                    <div className="flex items-center md:w-[220px] w-full">
                                        <div className="icon p-2 bg-gray-200 rounded-full text-center">
                                            <SiVirustotal />

                                        </div>
                                        <div className="mx-2">
                                            <div className="mx-2 mb-2"> 5 </div>
                                            <div className="text-xs font-light"> Remaining Leaves </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="card p-3 rounded-lg bg-gray-300">
                                    <div className="flex items-center md:w-[220px] w-full">
                                        <div className="icon p-2 bg-gray-200 rounded-full text-center">

                                            <CgUnavailable />
                                        </div>
                                        <div className="mx-2">
                                            <div className="mx-2 mb-2"> 5 </div>
                                            <div className="text-xs font-light">Total Absents </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="card p-3 rounded-lg bg-gray-300">
                                    <div className="flex items-center md:w-[220px] w-full">
                                        <div className="icon p-2 bg-gray-200 rounded-full text-center">

                                            <FaBriefcaseMedical />
                                        </div>
                                        <div className="mx-2">
                                            <div className="mx-2 mb-2"> 5 </div>
                                            <div className="text-xs font-light">Medical Leaves </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="card p-3 rounded-lg bg-gray-300">
                                    <div className="flex items-center md:w-[220px] w-full">
                                        <div className="icon p-2 bg-gray-200 rounded-full text-center">

                                            <FaHourglassHalf />
                                        </div>
                                        <div className="mx-2">
                                            <div className="mx-2 mb-2"> 5 </div>
                                            <div className="text-xs font-light">Half Days </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="card p-3 rounded-lg bg-gray-300">
                                    <div className="flex items-center md:w-[220px] w-full">
                                        <div className="icon p-2 bg-gray-200 rounded-full text-center">

                                            <FaArrowDownShortWide />
                                        </div>
                                        <div className="mx-2">
                                            <div className="mx-2 mb-2"> 5 </div>
                                            <div className="text-xs font-light">Short Leaves </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default DashboardPage