"use client"
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast'
import { RequestLeave } from '@/services/api';
import LeaveRequestTemplate from './LeaveRequestTemplate';
import axios from 'axios';

const initialValues = {
    leaveType: '',
    startDate: '',
    duration: '',
    purpose: ''
}
const LeaveRequestComponent: React.FC = () => {
    const [formdata, setFormdata] = useState(initialValues);
    const [leaveTypes, setLeaveTypes] = useState<{ leave_type_id: number; leave_type_name: string }[]>([]);

    const dataChange = (e: any) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const url = `leave/submitLeave`;
            const response: any = await RequestLeave(url, formdata);
            if (response.status === 201) {
                toast.success("Leave request submitted successfully")
                setFormdata(initialValues);
            }
        } catch (error) {
            console.error('Error submitting leave request:', error);
            toast.error("Something went wrong");
        }
    };
    useEffect(() => {
        const fetchLeaveTypes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/leaveTypesDetails');
                setLeaveTypes(response.data)
            } catch (error) {
                console.error('Error fetching leaveTypes:', error);
            }
        };

        fetchLeaveTypes();
    }, []);


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