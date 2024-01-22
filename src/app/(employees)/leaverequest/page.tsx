"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast'
import { BASE_URL } from '@/services/baseUrl';
import { RequestLeave } from '@/services/api';
import LeaveRequestTemplate from './LeaveRequestTemplate';

const initialValues = {
    leaveType: '',
    startDate: '',
    endDate: '',
    leaveReason: '',
}
const LeaveRequestComponent: React.FC = () => {
    const [formData, setFormdata] = useState(initialValues);

    const dataChange = (e: any) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        alert("okkk")
        try {
            const url = `${BASE_URL}leaveRequest`;
            const response: any = await RequestLeave(url, formData);
            console.log(response)
            toast.success("Leave request submitted successfully")
            setFormdata(initialValues);
        } catch (error) {
            console.error('Error submitting leave request:', error);
            toast.error("Something went wrong");
        }
    };

    return (
        <LeaveRequestTemplate
            dataChange={dataChange}
            handleOnSubmit={handleOnSubmit}
            formData={formData}
        />
    )
};

export default LeaveRequestComponent;