"use client"
// components/LeaveRequest.tsx
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import toast, { Toaster } from 'react-hot-toast'
import { BASE_URL } from '@/services/baseUrl';
import { RequestLeave } from '@/services/api';
import Sidebar from '@/app/components/Sidebar';

const LeaveRequest = () => {
    // Mock data for demonstration
    const remainingLeaves = 5;

    // State for leave request form
    const [formdata, setFormdata] = useState({
        leaveType: "",
        startDate: "",
        endDate: "",
        leaveReason: "",
    })
    const DataChange = (e: any) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    // State for leave status
    const [leaveStatus, setLeaveStatus] = useState('');

    // Function to handle leave request submission
    const handleLeaveRequest = async (e: any) => {
        e.preventDefault();
        try {

            const url = `${BASE_URL}leaveRequest`;
            const response: any = await RequestLeave(url, formdata);
            alert("Submit Request Leave : ")
            toast.success("Leave request submitted successfully")
            console.log(formdata)
            // Update leave status
            setLeaveStatus('Leave request submitted successfully');

        } catch (error) {
            console.error('Error submitting leave request:', error);
            setLeaveStatus('Failed to submit leave request');
            toast.error("Something went wrong");
        }
    };

    return (
        <>
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
                                    <form onSubmit={handleLeaveRequest} method="POST">
                                        <div className="mb-6">
                                            <label htmlFor="leaveType" className="block mb-2 text-sm font-medium text-textColor">
                                                Leave Type:
                                            </label>
                                            <select id="leaveType"
                                                name='leaveType'
                                                required
                                                value={formdata.leaveType}
                                                onChange={DataChange}
                                                className="cursor-pointer bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5"
                                            >
                                                <option value="fullLeave">Full Leave</option>
                                                <option value="medicalLeave">Medical Leave</option>
                                                <option value="halfDayLeave">Half Day Leave</option>
                                                <option value="shortLeave">Short Leave</option>
                                            </select>
                                        </div>

                                        <div className="mt-2 grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-textColor ">
                                                    Start Date:
                                                </label>
                                                <input
                                                    id="date"
                                                    className="cursor-pointer bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "

                                                    type="date"
                                                    name="startDate"
                                                    value={formdata.startDate}
                                                    onChange={DataChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-textColor ">
                                                    End Date:
                                                </label>
                                                <input
                                                    id="date"
                                                    className="cursor-pointer bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "

                                                    type="date"
                                                    name="endDate"
                                                    value={formdata.endDate}
                                                    onChange={DataChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="leaveReason" className="block mb-2 text-sm font-medium text-textColor ">
                                                Leave Reason
                                            </label>
                                            <textarea
                                                name='leaveReason'
                                                value={formdata.leaveReason}
                                                onChange={DataChange}
                                                required
                                                className="cursor-pointer bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="Give reason for leave"
                                                rows={3}
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


        </>
    );
};

export default LeaveRequest;
