"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BASE_URL } from '@/services/baseUrl'
import { registerUser } from '@/services/api'
import RegisterFormTemplate from './RegisterFormTemplate'
const InitialformData = {
    employeeType: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    designation: "",
    department: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    address: "",
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
        try {
            const url = `${BASE_URL}register`;
            const response: any = await registerUser(url, formdata);
            if (response.status === 200) {
                setLoading(false);
                console.log("Data is", response);
                toast.success("User Created successfully. Go to login Page");
                setFormdata(InitialformData);

            }
        } catch (error: any) {
            setLoading(false);
            const response: any = error.response.status;
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