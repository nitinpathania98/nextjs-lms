"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import Sidebar from '@/app/components/Sidebar';
import { BASE_URL } from '@/services/baseUrl';
import { HistoryLeave } from '@/services/api';

interface HistoryDetails {
    types: string,
    startDate: string,
    endDate: string,
    leaveReason: string,
    status: string,
}

const History: React.FC = () => {
    // Mock data for demonstration
    const fullLeaves = 12;
    const remainingLeaves = 12;
    const medicalLeave = 1;
    const halfDayLeave = 1;
    const shortLeave = 1;
    const [leaveHistory, setLeaveHistory] = useState<HistoryDetails[]>([]
    );

    // const mockLeaveHistory: any = [
    //     {
    //         id: 16,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 38423e6,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 24846,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },
    //     {
    //         id: 148,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 34,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 28468,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },
    //     {
    //         id: 1607846,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 3807767,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 25123,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },
    //     {
    //         id: 12452,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 32643,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 22356,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },
    //     {
    //         id: 1135,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 31625,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 2354,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },
    //     {
    //         id: 153,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 37564543,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 21221,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },
    //     {
    //         id: 11221,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 31221,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 212,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },
    //     {
    //         id: 112,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 312,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 2112342,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },
    //     {
    //         id: 11,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 31,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 21,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },
    //     {
    //         id: 122,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Approved',
    //     },
    //     {
    //         id: 322,
    //         leaveType: 'Full Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Reject',
    //     },
    //     {
    //         id: 22,
    //         leaveType: 'Half Leave',
    //         startDate: '2023-01-01',
    //         endDate: '2023-01-05',
    //         reason: 'Vacation',
    //         status: 'Pending',
    //     },

    // ];
    const fetchLeaveHistory = async () => {
        try {
            const url = `${BASE_URL}User/LeaveHistory?userid=4`;
            const response = await HistoryLeave(url, leaveHistory);
            console.log(response.data);
            setLeaveHistory([response.data.leaveHistory]);
        } catch (error) {
            console.error('Error fetching leave history:', error);
        }
    };

    useEffect(() => {

        fetchLeaveHistory();

    }, []);
    console.log(leaveHistory, "yahoo")
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Navbar />
                    <div className="mx-auto max-w-screen-2xl w-full p-4 md:p-2 2xl:p-5">
                        <div className='w-auto  '>
                            <div className='p-1 '>
                                <div className="bg-gray-200 p-4 rounded-md shadow-md">

                                    <h2 className="text-xl md:text-2xl  mb-4">Leave History</h2>
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
                                        <tbody className='overflow-y-auto text-center'>
                                            {leaveHistory.length > 0 && leaveHistory.map((result: any,) => (
                                                <tr key={result?.id} >
                                                    <td className="border border-black px-4 py-2">{result.types}</td>
                                                    <td className="border border-black px-4 py-2">{result.startDate}</td>
                                                    <td className="border border-black px-4 py-2">{result.endDate}</td>
                                                    <td className="border border-black px-4 py-2">{result.leavereason}</td>
                                                    <td className="border border-black px-4 py-2">{result.status}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default History;
