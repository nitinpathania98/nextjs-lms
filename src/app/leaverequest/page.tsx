"use client"
// components/LeaveRequest.tsx
import React, { useState } from 'react';
import BaseLayout from '@/app/components/BaseLayout';
import Navbar from '../components/Navbar';
import toast, { Toaster } from 'react-hot-toast'
import { BASE_URL } from '@/services/baseUrl';
import { RequestLeave } from '@/services/api';

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

            const url = `${BASE_URL}User/LeaveRequest`;
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
        <BaseLayout>
            <Navbar />
            <div className="p-6">
                <div className="bg-gray-200 p-4 rounded-md shadow-md mb-6">
                    <h2 className="text-xl font-bold mb-4">Leave Request</h2>
                    <form onSubmit={handleLeaveRequest} method="POST" >

                        <div className="grid grid-cols-3 gap-6 px-2">
                            <div className="flex items-center justify-between py-2">
                                <span className="font-semibold">Remaining Leaves:</span>
                                <span className="text-blue-500">{remainingLeaves}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 px-2">
                            <div className="flex items-center justify-between py-2">
                                <label className="font-semibold">Leave Type:</label>
                                <select
                                    name='leaveType'
                                    required
                                    value={formdata.leaveType}
                                    onChange={DataChange}
                                    className="p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="fullLeave">Full Leave</option>
                                    <option value="medicalLeave">Medical Leave</option>
                                    <option value="halfDayLeave">Half Day Leave</option>
                                    <option value="shortLeave">Short Leave</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <label className="font-semibold">Start Date:</label>
                                <input
                                    type="date"
                                    name='startDate'
                                    value={formdata.startDate}
                                    onChange={DataChange}
                                    required
                                    className="p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <label className="font-semibold">End Date:</label>
                                <input
                                    type="date"
                                    name='endDate'
                                    value={formdata.endDate}
                                    onChange={DataChange}
                                    required
                                    className="p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 px-2">
                            <div className="flex items-center justify-between py-2">
                                <label className="font-semibold">Leave Reason:</label>
                                <textarea
                                    name='leaveReason'
                                    value={formdata.leaveReason}
                                    onChange={DataChange}
                                    required
                                    className="p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="py-2 px-2">
                            <button
                                type='submit'
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Submit Leave Request
                            </button>
                        </div>

                    </form>
                </div>

                <div className="bg-gray-200 p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-bold mb-4">Leave Status</h2>
                    <div className="py-2">
                        {leaveStatus && (
                            <div className="text-green-500">{leaveStatus}</div>
                        )}
                    </div>
                </div>
            </div>

        </BaseLayout>
    );
};

export default LeaveRequest;
