"use client"
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '@/services/baseUrl';
import { HistoryLeave } from '@/services/api';
import LeaveHistoryTemplate from './LeaveHistoryTemplate';
import { LeaveHistoryInterface } from './LeaveHistoryInterface';
import axios from 'axios';

const initialValues = {
    leave_types: '',
    startDate: '',
    duration: '',
    purpose: '',
    status: '',
}
const History: React.FC = () => {

    const [leaveHistory, setLeaveHistory] = useState<LeaveHistoryInterface[]>([]);

    useEffect(() => {
        const fetchLeaveHistory = async () => {
            try {
                const url = `http://localhost:8080/leaveSubmit`;
                const response: any = await axios.get(url);
                setLeaveHistory(response.data);
            } catch (error) {
                console.error('Error fetching leave history:', error);
            }
        };
        fetchLeaveHistory();
    }, []);
    return (
        <LeaveHistoryTemplate
            leaveHistory={leaveHistory}
            leave_type={''}
            startDate={''}
            duration={''}
            purpose={''}
            status={''}
        />
    );
};

export default History;
