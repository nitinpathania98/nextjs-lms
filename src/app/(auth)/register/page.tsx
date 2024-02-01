"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BASE_URL } from '@/services/baseUrl'
import { registerUser } from '@/services/api'
import RegisterFormTemplate from './RegisterFormTemplate'
import axios from 'axios'

const InitialformData = {
    userName: "",
    email: "",
    password: ""
}

function Register() {

    const [formdata, setFormdata] = useState(InitialformData)
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<registerErrorType>({})

    //........onchange for data entry on update 
    const onChangeData = (e: any) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    ///......formsubmit onhandle
    const onRegister = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        const url = 'http://localhost:8080/api/users/signup';
        const response: any = await axios.post(url, formdata);
        if (response.status === 201) {
            setLoading(false);
            console.log("Data is", response);
            toast.success("User Created successfully. Go to login Page");
            setFormdata(InitialformData);

        }
        // try {
        //     const url = '../../api/register/register';
        //     const response: any = await registerUser(url, formdata);
        //     if (response.status === 200) {
        //         setLoading(false);
        //         console.log("Data is", response);
        //         toast.success("User Created successfully. Go to login Page");
        //         setFormdata(InitialformData);

        //     }
        // } catch (error: any) {
        //     setLoading(false);
        //     const response: any = error.response.status;
        //     console.log(response, "error status")
        //     if (response === 400) {
        //         toast.error("Check the validations");
        //         setLoading(false);
        //         const message: any = error.response.data.errors;
        //         console.log(message, "error message")
        //         setErrors((prevState: registerErrorType) => {
        //             let updatedErrors: any = { ...prevState };
        //             Object.keys(message).forEach((key) => {
        //                 updatedErrors[key] = message[key][0];
        //             });
        //             return updatedErrors;
        //         });
        //     } else {
        //         setLoading(false);
        //         toast.error("Something went wrong");
        //     }
        // }
    };

    return (
        <>
            <RegisterFormTemplate
                formdata={formdata}
                onChangeData={onChangeData}
                onRegister={onRegister}
                errors={errors}
                loading={loading}
            />
        </>
    )
}

export default Register