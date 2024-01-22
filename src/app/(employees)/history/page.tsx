"use client"
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '@/services/baseUrl';
import { HistoryLeave } from '@/services/api';
import LeaveHistoryTemplate from './LeaveHistoryTemplate';
import { LeaveHistoryInterface } from './LeaveHistoryInterface';

const initialValues = {
    types: '',
    startDate: '',
    endDate: '',
    leaveReason: '',
    status: '',
}
const History: React.FC = () => {

    const [leaveHistory, setLeaveHistory] = useState<LeaveHistoryInterface[]>([]);

    useEffect(() => {
        const fetchLeaveHistory = async () => {
            try {
                const url = `${BASE_URL}leaveHistory`;
                const response = await HistoryLeave(url);
                console.log(response);
                setLeaveHistory([response.data.leaveHistory]);
            } catch (error) {
                console.error('Error fetching leave history:', error);
            }
        };
        fetchLeaveHistory();
    }, []);

    console.log(leaveHistory, "yahoo")
    return (
        <LeaveHistoryTemplate
            leaveHistory={leaveHistory}
            types={''}
            startDate={''}
            endDate={''}
            leaveReason={''}
            status={''}
        />
    );
};

export default History;
