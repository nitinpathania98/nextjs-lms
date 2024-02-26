"use client"
import React, { useEffect, useState } from 'react';
import { HistoryLeave } from '@/services/api';
import LeaveHistoryTemplate from './LeaveHistoryTemplate';
import { LeaveHistoryInterface } from './LeaveHistoryInterface';

const initialValues = {
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
    status: '',
}
const History: React.FC = () => {

    const [leaveHistory, setLeaveHistory] = useState<LeaveHistoryInterface[]>([]);

    useEffect(() => {
        const fetchLeaveHistory = async () => {
            try {
                let accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    console.error('Token not found. Redirect to login page.');
                    return;
                }

                const response = await fetch('http://localhost:8080/api/users/user/details', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const userDetails = await response.json();
                    setLeaveHistory(userDetails);
                    console.log("userDEtails", userDetails);
                } else if (response.status === 401) {
                    // Token expired, try refreshing the token
                    const refreshResponse = await fetch('http://localhost:8080/api/refresh', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (refreshResponse.ok) {
                        const { accessToken: newAccessToken } = await refreshResponse.json();
                        localStorage.setItem('token', newAccessToken);
                        // Retry fetching user details with the new access token
                        fetchLeaveHistory();
                    } else {
                        console.error('Failed to refresh token. Redirect to login page.');
                    }
                } else {
                    console.error('Failed to fetch user details');
                }
            } catch (error: any) {
                console.error('Error fetching user details:', error.message);
            }
        };
        fetchLeaveHistory();
    }, []);
    return (
        <LeaveHistoryTemplate
            leaveHistory={leaveHistory}
            leaveType={''}
            startDate={''}
            endDate={''}
            reason={''}
            status={''}
        />
    );
};

export default History;