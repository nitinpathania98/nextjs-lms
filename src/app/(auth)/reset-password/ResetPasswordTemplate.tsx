import React from 'react';

import Link from 'next/link'
import { ResetPasswordInterface } from './ResetPasswordInterface';

const ResetPasswordTemplate: React.FC<ResetPasswordInterface> = ({
    onChangeData,
    submit,
    formdata,
    loading,
    errors,
}) => {
    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="w-[500px] p-5 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold">Reset Passowrd ?</h1>
                    <form onSubmit={submit}>
                        <div className="mt-5">
                            <label htmlFor="password" className="block">Password</label>
                            <input
                                id="password"
                                type="password"
                                name='password'
                                autoComplete=''
                                placeholder="Enter your new password"
                                className="w-full h-10 p-2 border rounded-md outline-red-400"
                                onChange={onChangeData}
                                value={formdata.password}
                            />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="cPassword" className="block">Confirm Password</label>
                            <input
                                id="cpassword"
                                type="password"
                                name='cPassword'
                                autoComplete=''
                                placeholder="Confirm Passsword"
                                className="w-full h-10 p-2 border rounded-md outline-red-400"
                                onChange={onChangeData}
                                value={formdata.cPassword}
                            />
                        </div>
                        <div className="mt-5">
                            <button
                                className="w-full bg-black p-2 rounded-lg text-white"
                                disabled={loading}
                            >
                                {loading ? "Processing.." : "Submit"}
                            </button>
                        </div>
                        <div className="mt-5 text-center">
                            <Link href="/login" className="text-orange-400">
                                {" "}
                                Back to Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordTemplate;
