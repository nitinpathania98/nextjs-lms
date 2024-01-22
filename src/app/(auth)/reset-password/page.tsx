"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import ResetPasswordTemplate from "./resetPasswordTemplate";

const initialFormValues = {
    password: "",
    cpassword: "",
};

export default function ResetPassword({ params, }: {
    params: { email: string };
}) {
    const searchParam = useSearchParams();
    const [authState, setAuthState] = useState(initialFormValues);

    const onChangeData = (e: any) => {
        setAuthState({
            ...authState,
            [e.target.name]: e.target.value
        })
    }
    const [loading, setLoading] = useState(false);
    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        axios
            .post("", {
                email: params.email,
                signature: searchParam.get("signature"),
                password: authState.password,
                password_confirmation: authState.cpassword,
            })
            .then((res) => {
                const response = res.data;
                if (response.status == 400) {
                    toast.error(response.message, { theme: "colored" });
                } else if (response.status == 200) {
                    toast.success(response.message, { theme: "colored" });
                }
            })
            .catch((err) => {
                setLoading(false);
                console.log("err..", err);
            });
    };
    return (
        <>
            <ToastContainer />
            <ResetPasswordTemplate
                submit={submit}
                onChangeData={ onChangeData}
                formdata={authState }
                loading={false}
                errors={undefined } />
        </>
    )
}
