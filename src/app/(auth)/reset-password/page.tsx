"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import ResetPasswordTemplate from "./ResetPasswordTemplate";

const initialFormValues = {
    password: "",
    cpassword: "",
};

export default function ResetPassword({ params }: {
    params: { email: string };
}) {
    const searchParam = useSearchParams();
    const [authState, setAuthState] = useState(initialFormValues);
    const [loading, setLoading] = useState(false);

    const onChangeData = (e: any) => {
        setAuthState({
            ...authState,
            [e.target.name]: e.target.value
        })
    }

    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("", {
                email: params.email,
                signature: searchParam.get("signature"),
                password: authState.password,
                password_confirmation: authState.cpassword,
            });

            if (response.data.status === 400) {
                toast.error(response.data.message, { theme: "colored" });
            } else if (response.data.status === 200) {
                toast.success(response.data.message, { theme: "colored" });
            }
        } catch (err) {
            setLoading(false);
            console.error("Error:", err);
        }
    };
    return (
        <>
            <ToastContainer />
            <ResetPasswordTemplate
                submit={submit}
                onChangeData={onChangeData}
                formdata={authState}
                loading={loading}
                errors={undefined} />
        </>
    )
}
