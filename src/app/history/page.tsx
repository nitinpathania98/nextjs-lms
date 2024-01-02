"use client"
import React, { useEffect, useState } from 'react';
import BaseLayout from '@/app/components/BaseLayout';
import Navbar from '../components/Navbar';
import axios from 'axios';

const History = () => {
    // Mock data for demonstration
    const fullLeaves = 12;
    const remainingLeaves = 12;
    const medicalLeave = 1;
    const halfDayLeave = 1;
    const shortLeave = 1;
    const [leaveHistory, setLeaveHistory] = useState([]
    );

    const mockLeaveHistory: any = [
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 1,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Approved',
        },
        {
            id: 3,
            leaveType: 'Full Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Reject',
        },
        {
            id: 2,
            leaveType: 'Half Leave',
            startDate: '2023-01-01',
            endDate: '2023-01-05',
            reason: 'Vacation',
            status: 'Pending',
        },

    ];


    useEffect(() => {
        const fetchLeaveHistory = async () => {
            try {
                const response = await axios.get('');
                setLeaveHistory(mockLeaveHistory);
            } catch (error) {
                console.error('Error fetching leave history:', error);
            }
        };

        fetchLeaveHistory();
    }, []);

    return (
        <BaseLayout>
            <Navbar />
            <div className="p-6">


                <div className="bg-gray-200 p-4 rounded-md shadow-md">

                    <h2 className="text-xl font-bold mb-4">Leave History</h2>
                    <table className="w-full table-auto overflow-x-auto ">
                        <thead>
                            <tr className="bg-gray-300 ">
                                <th className="border-2 border-black px-4 py-2">Leave Type</th>
                                <th className="border-2 border-black px-4 py-2">Start Date</th>
                                <th className="border-2 border-black px-4 py-2">End Date</th>
                                <th className="border-2 border-black px-4 py-2">Reason</th>
                                <th className="border-2 border-black px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody className='overflow-y-auto h-32'>
                            {leaveHistory.map((leave: any) => (
                                <tr key={leave.id} >
                                    <td className="border border-black px-4 py-2">{leave.leaveType}</td>
                                    <td className="border border-black px-4 py-2">{leave.startDate}</td>
                                    <td className="border border-black px-4 py-2">{leave.endDate}</td>
                                    <td className="border border-black px-4 py-2">{leave.reason}</td>
                                    <td className="border border-black px-4 py-2">{leave.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </BaseLayout>
    );
};

export default History;
