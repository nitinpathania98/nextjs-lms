"use client"
import React, { useState } from 'react'
import { signIn, useSession } from "next-auth/react";
import { UserLogin } from '@/services/api';
import { BASE_URL } from '@/services/baseUrl';
import toast from 'react-hot-toast';
import SignInTemplate from './SignInTemplate';

const initialFormValues = {
    email: "",
    password: "",
};

function Login() {
    const [formdata, setFormdata] = useState(initialFormValues)
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<loginErrorType>({})
    const { data: session } = useSession();

    const onChangeData = (e: any) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const onLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const url = 'http://localhost:8080/api/users/login';
            const response = await UserLogin(url, formdata);
            console.log(response)
            const { token } = response.data;

            // Set the HttpOnly cookie with the token
            localStorage.setItem('token', token);
            console.log('Token stored:', token);
            // document.cookie = `jwt=${token}; path=/; max-age=${1 * 24 * 60 * 60}; secure; HttpOnly`;

            if (response.status === 200) {
            
                toast.success('User logged in');
                // Sign in the user and create a session
                signIn('credentials', {
                    email: formdata.email,
                    password: formdata.password,
                    callbackUrl: '/',
                    redirect: true,
                });
                console.log('New token:', token);
            }
        } catch (error: any) {
            const response = error.response;
            if (response && response.status === 401) {
                toast.error('Invalid email or password');
            } else {
                console.error('Error logging in:', error.message);
                toast.error('Something went wrong');
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <SignInTemplate onLogin={onLogin}
            onChangeData={onChangeData}
            formdata={formdata}
            loading={loading}
            errors={errors}
        />
    )
}

export default Login
