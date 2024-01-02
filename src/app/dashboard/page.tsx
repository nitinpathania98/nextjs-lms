import React from 'react'
import BaseLayout from '@/app/components/BaseLayout'
import Navbar from '../components/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { MdPendingActions } from 'react-icons/md';
import { GrCompliance } from "react-icons/gr";
import { SiVirustotal } from "react-icons/si";
import { CgUnavailable } from "react-icons/cg";
import { CiMedicalCase } from "react-icons/ci";
import { FaHourglassHalf, FaBriefcaseMedical } from "react-icons/fa";
import { FaArrowDownShortWide } from "react-icons/fa6";

const DashboardPage = () => {
    return (
        <>
            <BaseLayout>
                <Navbar />

                <div className='w-auto  '>
                    <div className='p-5 '>
                        <div className=" card rounded-lg shadow bg-card p-2 my-2 bg-gray-200">
                            {/* Header Section */}
                            <div className="flex justify-between items-center my-2">
                                <div className="flex items-center">
                                    <div className="p-1 w-1 h-[30px] bg-themeColor rounded-lg shadow" />
                                    <div className="text-textColor text-lg mx-2">Employee Details</div>
                                </div>

                                <button className="flex items-center text-white text-lg  text-center p-2">

                                    Month
                                </button>
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
                                    <div className="text-textColor text-xl md:text-2xl mb-2 px-6 py-3">John Doe</div>
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
                            <div className="mb-2 flex flex-wrap justify-even gap-5 w-  p-2">
                                {/* Attendance Card */}
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
                        <div className="flex flex-wrap justify-center w-full p-2">

                            <div className="cursor-pointer relative mx-2 my-2 rounded-lg p-3 border border-gray-300 bg-yellow-400 ">
                                <div className=" card p-3 rounded-lg ">
                                    <div className="md:w-[300px] w-full">
                                        <div className="flex justify-between mb-3">
                                            <div className="flex items-center">
                                                <div className="p-2 rounded-full text-center bg-yellowColor text-white">
                                                    <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" />
                                                    </svg>
                                                </div>
                                                <div className="mx-2">
                                                </div>
                                            </div>
                                            <div className="shadow-lg p-2 rounded-full text-xs font-bold text-center text-white bg-yellowColor">
                                                Pending</div>
                                        </div>
                                        <div className="text-xs font-light my-2">
                                            Family vacation
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="mb-2">
                                                <div className="text-xs mb-2 font-light text-gray-700">
                                                    From Date
                                                </div>
                                                <div className="text-xs">
                                                    Nov 1, 2023
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <div className="text-xs mb-2 font-light text-gray-700">
                                                    To Date
                                                </div>
                                                <div className="text-xs">
                                                    Nov 5, 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative mx-2 my-2 rounded-lg p-3 border border-gray-300 bg-blue-400 ">
                                <div className=" card p-3 rounded-lg ">
                                    <div className="md:w-[300px] w-full">
                                        <div className="flex justify-between mb-3">
                                            <div className="flex items-center">
                                                <div className="p-2 rounded-full text-center bg-themeColor text-white">
                                                    <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                    </svg>
                                                </div>
                                                <div className="mx-2">
                                                </div>
                                            </div>
                                            <div className="shadow-lg p-2 rounded-full text-xs font-bold text-center text-white bg-themeColor ">
                                                Approved
                                            </div>
                                        </div>
                                        <div className="text-xs font-light my-2"> Fever </div><div className="flex justify-between">
                                            <div className="mb-2">
                                                <div className="text-xs mb-2 font-light text-gray-700">
                                                    From Date
                                                </div>
                                                <div className="text-xs">
                                                    Nov 10, 2023
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <div className="text-xs mb-2 font-light text-gray-700">
                                                    To Date
                                                </div>
                                                <div className="text-xs">
                                                    Nov 12, 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseLayout>
        </>
    )
}

export default DashboardPage