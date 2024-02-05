"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import { LeaveRequestInterface } from './LeaveRequestInterface';
const LeaveRequestTemplate: React.FC<LeaveRequestInterface> = ({
    dataChange,
    handleOnSubmit,
    formdata,
    leaveTypes,
}) => {
    return (
        <div>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto ">
                    <Navbar />
                    <div className="mx-auto w-full p-4 md:p-2 2xl:p-5">
                        <div className='w-auto  '>
                            <div className='p-1 '>
                                {/* Leave Request */}
                                <div className="mx-2 my-2 rounded-lg p-3 border border-gray-300 bg-gray-200" >
                                    <h2 className=" text-xl md:text-2xl  mb-4">Leave Request</h2>
                                    <form onSubmit={handleOnSubmit} method='POST'>
                                        <label htmlFor="leaveType" className="block mb-2 text-sm font-medium text-textColor">
                                            Leave Type:
                                        </label>
                                        <select
                                            id="leaveType"
                                            name="leaveType"
                                            required
                                            onChange={dataChange}
                                            value={formdata.leaveType}
                                            className="cursor-pointer bg-cardColor border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5"
                                        >
                                            <option value="" disabled>Select Leave Type</option>
                                            {leaveTypes.map((leaveType) => (
                                                <option key={leaveType.leave_type_id} value={leaveType.leave_type_name}>
                                                    {leaveType.leave_type_name}
                                                </option>
                                            ))}
                                        </select>

                                        <div className="mt-2 grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-textColor ">
                                                    Start Date:
                                                </label>
                                                <input
                                                    type="date"
                                                    id="startDate"
                                                    className="cursor-pointer bg-cardColor border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                    name="startDate"
                                                    onChange={dataChange}
                                                    value={formdata.startDate}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="duration" className="block mb-2 text-sm font-medium text-textColor ">
                                                    Duration:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="duration"
                                                    className="cursor-pointer bg-cardColor border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                    name="duration"
                                                    onChange={dataChange}
                                                    value={formdata.duration}
                                                    required
                                                    placeholder="10 days"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="purpose" className="block mb-2 text-sm font-medium text-textColor ">
                                                Leave Purpose
                                            </label>
                                            <input
                                                type='text'
                                                id='purpose'
                                                name='purpose'
                                                onChange={dataChange}
                                                value={formdata.purpose}
                                                required
                                                className="cursor-pointer bg-cardColor border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="Give reason for leave"
                                            />
                                        </div>
                                        <div className="py-2  col-span-3">
                                            <button
                                                type='submit'
                                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                                            >
                                                Submit Leave Request
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LeaveRequestTemplate;


