"use client"
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast'
import { LeaveTypes, RequestLeave } from '@/services/api';
import LeaveRequestTemplate from './LeaveRequestTemplate';

const initialValues = {
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: ''
}
const LeaveRequestComponent: React.FC = () => {
    const [formdata, setFormdata] = useState(initialValues);
    const [leaveTypes, setLeaveTypes] = useState<{ leave_type_id: number; leave_type_name: string }[]>([]);
    const [UserId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        const fetchLeaveTypes = async () => {
            try {
                const url = `leavetypes`;
                const response: any = await LeaveTypes(url);
                setLeaveTypes(response.data)
            } catch (error) {
                console.error('Error fetching leaveTypes:', error);
            }
        };

        fetchLeaveTypes();
        const fetchUserId = async () => {
            try {
                // Replace this with your actual authentication logic
                const loggedInUserId = await fetchLoggedInUserId();
                setUserId(loggedInUserId);
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        fetchUserId();
    }, []);
    const fetchLoggedInUserId = async () => {
        try {

            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('http://localhost:8080/api/users/user/details', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            const user = await response.json();
            if (user.length > 0) {
                return user[0].UserId; // Replace 'UserId' with the actual property name
            } else {
                // Handle the case where no user is found
                throw new Error('No user found');
            }
        } catch (error) {
            console.error('Error fetching user ID:', error);
            throw error;
        }
    };


    const dataChange = (e: any) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const requestData = {
                ...formdata,
                UserId: UserId 
            };
            const url = `leave-request`;
            const response: any = await RequestLeave(url, requestData);
            if (response.status === 201) {
                toast.success("Leave request submitted successfully")
                setFormdata(initialValues);
            }
        } catch (error) {
            console.error('Error submitting leave request:', error);
            toast.error("Something went wrong");
        }
    };
    return (
        <LeaveRequestTemplate
            dataChange={dataChange}
            handleOnSubmit={handleOnSubmit}
            formdata={formdata}
            leaveTypes={leaveTypes}
        />
    )
};

export default LeaveRequestComponent;