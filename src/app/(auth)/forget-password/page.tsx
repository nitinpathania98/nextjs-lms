"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPasswordTemplate from "./ForgetPasswordTemplate";

const initialFormValues = {
    email: "",
};

export default function ForgetPassword() {
    const [formdata, setFormdata] = useState(initialFormValues);
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<forgetPasswordErrorType>({});


    const onChangeData = (e: any) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }
    
    const submit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        axios
            .post("", { email: formdata.email })
            .then((res) => {
                setLoading(false);
                const response = res.data;
                if (response.status == 200) {
                    toast.success(response.message, { theme: "colored" });
                } else if (response.status == 400) {
                    setErrors(response.errors);
                } else if (response.status == 500) {
                    toast.success(response.message, { theme: "colored" });
                }
            })
            .catch((err) => {
                setLoading(false);
                console.log("The error is", err);
                toast.error(err, { theme: "colored" });
            });
    };

    return (
        <ForgetPasswordTemplate
            submit={submit}
            onChangeData={onChangeData}
            formdata={formdata}
            loading={loading}
            errors={errors} />
    );
}
