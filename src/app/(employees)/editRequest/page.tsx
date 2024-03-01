"use client"
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import EditRequestTemplate from './editRequestTemplate';
import { EditRequestInterface } from './editRequestInterface';
import { LeaveTypes } from '@/services/api';

const initialValues = {
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
    status: '',
    id: '',
    UserId: '',
};

interface EditRequestProps extends EditRequestInterface {
    isModal: boolean;
    handleClose: () => void;
    item: any;
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    onUpdate:(updatedData: any) => void; 
}

const EditRequestComponent: React.FC<EditRequestProps> = ({ isModal, handleClose, item, formData, setFormData, onUpdate }) => {
    const [formdata, setFormdata] = useState(initialValues);
    const [leaveTypes, setLeaveTypes] = useState<{ leave_type_id: number; leave_type_name: string }[]>([]);

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
        if (item) {
            const { leaveType, startDate, endDate, reason,status, id, UserId } = item;
            setFormdata({
                leaveType: leaveType || '',
                startDate: startDate || '',
                endDate: endDate || '',
                reason: reason || '',
                id: id || '',
                status: status || '',
                UserId: UserId || '',
            });
        }
        else {
            // Reset formdata to initial values if user data is not available
            setFormdata(initialValues);
        }
    }, [item],);

    //state
    const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            let accessToken = localStorage.getItem('accessToken');
            let refreshToken = localStorage.getItem('refreshToken');

            if (!accessToken || !refreshToken) {
                console.error('Token not found. Redirect to login page.');
                return;
            }

            const id = formdata.id;

            if (!id) {
                console.error('ID not found in formdata.');
                return;
            }

            const url = `http://localhost:8080/api/leave-request/${id}`;
            const response: any = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata)
            });

            if (response.ok) {
                toast.success("LeaveRequest Edited successfully");
                onUpdate(formdata);
                handleClose();
            } else if (response.status === 401) {
                // Token expired, try refreshing the token
                const refreshResponse = await fetch('http://localhost:8080/api/refresh', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${refreshToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (refreshResponse.ok) {
                    const { accessToken: newAccessToken } = await refreshResponse.json();
                    localStorage.setItem('accessToken', newAccessToken);
                    // Retry registering with the new access token
                    handleSubmit(e);
                } else {
                    console.error('Failed to refresh token. Redirect to login page.');
                    // You may want to redirect the user to the login page here
                }
            } else {
                console.error('Failed to EDit LeaveRequest');
                // Handle other error cases if necessary
            }
        } catch (error: any) {
            console.error('Error Editing Request:', error.message);
            toast.error("Something went wrong");
        }
    };
    const handleClosePopup = () => {
        setFormdata(formdata);
        handleClose();
    };

    if (!item) {
        return null;
    }


    return (
        <EditRequestTemplate
            handleSubmit={handleSubmit}
            onChangeData={onChangeData}
            handleClose={handleClosePopup}
            formdata={formdata}
            isModal={isModal}
            item={item}
            formData={formData}
            setFormData={setFormData}
            leaveTypes={leaveTypes}
        />
    );
};

export default EditRequestComponent;

