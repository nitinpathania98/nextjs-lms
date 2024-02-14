"use client"
import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Input, Label, makeStyles } from '@fluentui/react-components';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

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
};

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
});
const PersonalDetails: React.FC<{ initialValues: any }> = ({ initialValues }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get('userName') || '';
    const email = searchParams.get('email') || '';
    const password = searchParams.get('password') || '';
    const designation = searchParams.get('designation') || '';
    const department = searchParams.get('department') || '';
    const phoneNumber = searchParams.get('phoneNumber') || '';
    const country = searchParams.get('country') || '';
    const state = searchParams.get('state') || '';
    const city = searchParams.get('city') || '';
    const address = searchParams.get('address') || '';
    const id = searchParams.get('id') || '';
    const [formdata, setFormData] = useState({
        userName,
        email,
        password,
        designation,
        department,
        phoneNumber,
        country,
        state,
        city,
        address,
        id
    });
    console.log([formdata]);
    const styles = useStyles();

    const onChangeData = (e: any) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
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
                console.log("Data is", response.json());
                toast.success("Data Updated successfully");
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
                    console.log("Data is", createResponse.json());
                    toast.success("Data Updated successfully");
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

    return (
        <Dialog modalType="non-modal">
            <DialogTrigger disableButtonEnhancement>
                <Button>Edit Details</Button>
            </DialogTrigger>
            <DialogSurface aria-describedby={undefined}>
                <form onSubmit={handleSubmit}>
                    <DialogBody>
                        <DialogTitle>Personal Details</DialogTitle>
                        <DialogContent className={styles.content}>

                            <Label required htmlFor="department">
                                Department
                            </Label>
                            <Input required type="text" id="department"
                                name="department"
                                value={formdata.department}
                                onChange={onChangeData} />

                            <Label required htmlFor="designation">
                                Designation
                            </Label>
                            <Input required type="text" id="designation"
                                name="designation"
                                value={formdata.designation}
                                onChange={onChangeData}
                            />

                            <Label required htmlFor="country">
                                Country
                            </Label>
                            <Input required type="text" id="country"
                                name="country"
                                value={formdata.country}
                                onChange={onChangeData}
                            />

                            <Label required htmlFor="state">
                                State
                            </Label>
                            <Input required type="text" id="state"
                                name="state"
                                value={formdata.state}
                                onChange={onChangeData}
                            />

                            <Label required htmlFor="city">
                                City
                            </Label>
                            <Input required type="text" id="city"
                                name="city"
                                value={formdata.city}
                                onChange={onChangeData}
                            />

                            <Label required htmlFor="address">
                                Address
                            </Label>
                            <Input required type="text" id="address"
                                name="address"
                                value={formdata.address}
                                onChange={onChangeData}
                            />

                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="secondary">Close</Button>
                            </DialogTrigger>
                            <Button type="submit" appearance="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </DialogBody>
                </form>
            </DialogSurface>
        </Dialog>
    )
}
export default PersonalDetails;