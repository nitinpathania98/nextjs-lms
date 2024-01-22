"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPasswordTemplate from "./ResetPasswordTemplate";
import { BASE_URL } from "@/services/baseUrl";

const initialFormValues = {
    password: '',
    cPassword: '',
};

export default function ResetPassword() {
    const [formdata, setFormdata] = useState(initialFormValues);
    const [loading, setLoading] = useState<boolean>(false);

    const onChangeData = (e: any) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const submit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        // try {
        //     const url = `${BASE_URL}leaveRequest`;
        //     const response: any = await RequestLeave(url, formData);
        //     console.log(response)
        //     toast.success(response.data.message, { theme: "colored" });
        //     setAuthState(initialFormValues);
        // } catch (error) {
        //     console.error('ERRR', error);
        //     toast.error(response.data.message, { theme: "colored" });
        // }
    };
    return (

        <ResetPasswordTemplate
            submit={submit}
            onChangeData={onChangeData}
            formdata={formdata}
            loading={loading}
            errors={undefined} />

    )
}
