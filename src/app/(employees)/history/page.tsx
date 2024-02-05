"use client"
import React, { useEffect, useState } from 'react';
import { HistoryLeave } from '@/services/api';
import LeaveHistoryTemplate from './LeaveHistoryTemplate';
import { LeaveHistoryInterface } from './LeaveHistoryInterface';

const initialValues = {
    leaveType: '',
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
                const url = `leave/leaveDetails`;
                const response: any = await HistoryLeave(url);
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
            leaveType={''}
            startDate={''}
            duration={''}
            purpose={''}
            status={''}
        />
    );
};

export default History;
