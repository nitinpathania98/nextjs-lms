import React from 'react';
import Link from 'next/link'
import { ForgetPasswordInterface } from './ForgetPasswordInterface';
const ForgetPasswordTemplate: React.FC<ForgetPasswordInterface> = ({
    onChangeData,
    submit,
    formdata,
    loading,
    errors,
}) => (
    <>
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="w-[500px] p-5 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold">Forgot Passowrd ?</h1>
                <p> Do not worry it happens. just enter your email below and we will send an email to you.</p>
                <form onSubmit={submit}>
                    <div className="mt-5">
                        <label className="block">Email</label>
                        <input
                            type="email"
                            placeholder="john@gmail.com"
                            className="w-full h-10 p-2 border rounded-md outline-red-400"
                            onChange={onChangeData}
                            value={formdata.email}
                        />
                        <span className="text-red-500">{errors?.Email}</span>
                    </div>
                    <div className="mt-5">
                        <button
                            className="w-full bg-black p-2 rounded-lg text-white"
                            disabled={loading}
                        >
                            {loading ? "Processing" : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
);

export default ForgetPasswordTemplate;
