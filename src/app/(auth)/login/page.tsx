"use client"
import React, { useState } from 'react'
import { signIn } from "next-auth/react";
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

    const onChangeData = (e: any) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<loginErrorType>({})

    const onLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        console.log(formdata)
        try {
            const url = `${BASE_URL}login`;
            const response: any = await UserLogin(url, formdata);
            console.log("response", response);
            if (response.status === 200) {
                setLoading(false);
                toast.success("User loged In");
                signIn("credentials", {
                    email: formdata.email,
                    password: formdata.password,
                    callbackUrl: "/",
                    redirect: true,
                })
            }
        } catch (error: any) {
            setLoading(false);
            const response: any = error.response;
            console.log(response, "error status")
            if (response === 400) {
                toast.error("Check the validations");
                setLoading(false);
                const message: any = error.response.data.errors;
                console.log(message, "error message")
                setErrors((prevState: registerErrorType) => {
                    let updatedErrors: any = { ...prevState };
                    Object.keys(message).forEach((key) => {
                        updatedErrors[key] = message[key][0];
                    });
                    return updatedErrors;
                });
            } else {
                setLoading(false);
                toast.error("Something went wrong");
            }
        }
    }
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
