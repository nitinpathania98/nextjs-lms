"use client"
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PersonalDetails from './PersonalDetails';
import { PersonalDetailsInterface } from './PersonalDetailsInterface';

const initialValues = {
    userName: "",
    email: "",
    password: "",
    designation: "",
    department: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    address: "",
    id: "",
    UserId: "",
};

interface PersonalDetailsComponentProps extends PersonalDetailsInterface {
    isModal: boolean;
    handleClose: () => void;
    user: any;
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    onUpdate: () => void;
}

const PersonalDetailsComponent: React.FC<PersonalDetailsComponentProps> = ({ isModal, handleClose, user, formData, setFormData, onUpdate }) => {
    const [formdata, setFormdata] = useState(initialValues);


    useEffect(() => {
        if (user) {
            const { userName, email, password, designation, department, phoneNumber, country, state, city, address, id, UserId } = user;
            setFormdata({
                userName: userName || '',
                email: email || '',
                password: password || '',
                designation: designation || '',
                department: department || '',
                phoneNumber: phoneNumber || '',
                country: country || '',
                state: state || '',
                city: city || '',
                address: address || '',
                id: id || '',
                UserId: UserId || '',
            });
        }
        else {
            // Reset formdata to initial values if user data is not available
            setFormdata(initialValues);
        }
    }, [user]);

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
                // You may want to redirect the user to the login page here
                return;
            }

            const id = formdata.id;

            if (!id) {
                console.error('ID not found in formdata.');
                return;
            }

            const url = `http://localhost:8080/api/profile/user/${id}`;
            const response: any = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata)
            });

            if (response.ok) {
                toast.success("Data Updated successfully");
                onUpdate();
                handleClose();
            } else if (response.status === 404) {
                // If the user profile does not exist, create a new one
                const createResponse = await fetch('http://localhost:8080/api/profile/user', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formdata)
                });

                if (createResponse.ok) {
                    toast.success("Data Added successfully");
                    onUpdate();
                    handleClose();
                } else {
                    console.error('Failed to create user');
                }
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
                console.error('Failed to register user');
                // Handle other error cases if necessary
            }
        } catch (error: any) {
            console.error('Error registering user:', error.message);
            toast.error("Something went wrong");
        }
    };
    const handleClosePopup = () => {
        setFormdata(formdata);
        handleClose();
    };

    if (!user) {
        return null;
    }

    return (
        <PersonalDetails
            handleSubmit={handleSubmit}
            onChangeData={onChangeData}
            handleClose={handleClosePopup}
            formdata={formdata}
            isModal={isModal}
            user={user}
            formData={formData}
            setFormData={setFormData}
        />
    );
};

export default PersonalDetailsComponent;
