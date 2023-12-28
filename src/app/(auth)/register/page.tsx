"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BASE_URL } from '@/services/baseUrl'
import { registerUser } from '@/services/api'
const InitialformData = {
    name: "",
    email: "",
    password: "",
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
            const url = `${BASE_URL}User`;
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
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <div className="mb-2 flex justify-center">
                        </div>
                        <h2 className="text-center text-2xl font-bold leading-tight text-black">
                            Register to create account
                        </h2>
                        <p className="mt-2 text-center text-base text-gray-600">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                title=""
                                className="font-medium text-black transition-all duration-200 hover:underline"
                            >
                                Sign In
                            </Link>
                        </p><span></span>
                        <form method="POST" className="mt-8" onSubmit={onRegister}>
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Employee Name{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Full Name"
                                            id="name"
                                            name="name"
                                            value={formdata.name}
                                            onChange={onChangeData}
                                            required
                                        ></input>
                                        <span className='font-semibold text-red-500'>{errors?.Name}</span>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Email address{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            name="email"
                                            value={formdata.email
                                            }
                                            onChange={onChangeData}
                                            required
                                        ></input>
                                        <span className='font-semibold text-red-500'>{errors?.Email}</span>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Password{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            name="password"
                                            value={formdata.password
                                            }
                                            onChange={onChangeData}
                                            required
                                        ></input>
                                        <span className='font-semibold text-red-500'>{errors?.Password}</span>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="designation" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Designation{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type='text'
                                            placeholder="Designation"
                                            id="designation"
                                            name="designation"
                                            value={formdata.designation}
                                            onChange={onChangeData}
                                            required
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="employeeDesignation" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Department{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type='text'
                                            placeholder="Department"
                                            id="department"
                                            name="department"
                                            value={formdata.department
                                            }
                                            onChange={onChangeData}
                                            required
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phoneNumber" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Phone No{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type='text'
                                            placeholder="Enter your Phone no."
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formdata.phoneNumber
                                            }
                                            onChange={onChangeData}
                                            required
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="country" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Country{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type='text'
                                            placeholder="Country"
                                            id="country"
                                            name="country"
                                            value={formdata.country
                                            }
                                            onChange={onChangeData}
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="state" className="text-base font-medium text-gray-900">
                                        {' '}
                                        State{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type='text'
                                            placeholder="State"
                                            id="state"
                                            name="state"
                                            value={formdata.state
                                            }
                                            onChange={onChangeData}
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="city" className="text-base font-medium text-gray-900">
                                        {' '}
                                        City{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type='text'
                                            placeholder="City"
                                            id="city"
                                            name="city"
                                            value={formdata.city
                                            }
                                            onChange={onChangeData}
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="address" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Address{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type='text'
                                            placeholder="Full Address"
                                            id="address"
                                            name="address"
                                            value={formdata.address
                                            }
                                            onChange={onChangeData}
                                            required
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className={`inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 ${loading ? "bg-gray-700" : "bg-black"}`}
                                    >
                                        {loading ? "Processing" : "Register"}
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </section>



        </>
    )
}

export default Register




{/* <div style={{ flex: '1 1 0%' }}>
                            <div className="m-2 p-2">
                                <div className="flex justify-between items-center my-2 bg-card p-2  rounded-lg mb-5">
                                    <div className="flex items-center"><div className="p-1 w-1 h-[30px] bg-themeColor rounded-lg shadow" /><div className="text-textColor text-lg mx-2">Add user</div></div><button className="flex items-center text-white text-sm text-center bg-themeColor p-2 rounded-lg"><svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white mx-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg> <div>December 26, 2023</div></button></div><form className=""><div className="mb-6"><label htmlFor="employeeType" className="block mb-2 text-sm font-medium text-textColor">Select User to Add</label><select id="employeeType" className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5"><option disabled>Select User Type</option><option value="Team Leader">Team Leader</option><option value="employee">Employee</option></select></div><div className="mt-2 grid gap-6 mb-6 md:grid-cols-2"><div><label htmlFor="firstName" className="block mb-2 text-sm font-medium text-textColor ">First name</label><input id="firstName" className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 " placeholder="John" type="text" /></div><div><label htmlFor="lastName" className="block mb-2 text-sm font-medium text-textColor ">Last name</label><input id="lastName" className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 " placeholder="Doe" type="text" /></div></div><div className="mb-6"><label htmlFor="userEmail" className="block mb-2 text-sm font-medium text-textColor ">Email</label><input id="userEmail" className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 " placeholder="John@doe.com" type="email" /></div><div className="mt-2 grid gap-6 mb-6 md:grid-cols-2"><div className="mb-6"><label htmlFor="userPassword" className="block mb-2 text-sm font-medium text-textColor ">Password</label><input id="userPassword" className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 " placeholder="******" type="password" /></div><div><label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-textColor ">Confirm Password</label><input id="confirmPassword" className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 " placeholder="******" type="password" /></div></div><div className="mt-2 grid gap-6 mb-6 md:grid-cols-2"><div><label htmlFor="department" className="block mb-2 text-sm font-medium text-textColor">Department</label><select id="department" className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5"><option>Choose a department</option><option value="US">United States</option><option value="CA">Canada</option><option value="FR">France</option><option value="DE">Germany</option></select></div><div><label htmlFor="shift" className="block mb-2 text-sm font-medium text-textColor">Shift</label><select id="shift" className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5"><option>Choose a shift</option></select></div></div><button type="submit" className="flex items-center text-white text-sm text-center bg-themeColor p-2 rounded-lg"><svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white mx-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={20} y1={8} x2={20} y2={14} /><line x1={23} y1={11} x2={17} y2={11} /></svg> Add User</button></form>
                            </div>
                        </div> */}