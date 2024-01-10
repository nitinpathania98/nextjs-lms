"use client"
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BASE_URL } from '@/services/baseUrl'
import { registerUser } from '@/services/api'
import Sidebar from '@/app/components/Sidebar'
const InitialformData = {
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
function CreateEmployee() {
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
            <div className="flex h-screen overflow-hidden ">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Navbar />
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-2 2xl:p-5">
                        <div className='w-auto  '>
                            <div className='p-1 '>
                                <div className="flex justify-between items-center my-2 bg-card p-2 rounded-lg mb-5">
                                    <div className="flex items-center">
                                        <div className="p-1 w-1 h-[30px] bg-blue-500  hover:bg-blue-600 rounded-lg shadow" />
                                        <div className="text-textColor text-lg mx-2"> <h2 className='text-xl md:text-2xl'>Add Employee</h2></div>
                                    </div>
                                    <button className="flex items-center text-sm text-center bg-themeColor p-2
                                     bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white mx-2"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                                            <line x1={16} y1={2} x2={16} y2={6} />
                                            <line x1={8} y1={2} x2={8} y2={6} />
                                            <line x1={3} y1={10} x2={21} y2={10} />
                                        </svg>
                                        <div>January 2, 2024</div>
                                    </button>
                                </div>

                                <form method='POST' onSubmit={onRegister}>
                                    <div className="mb-6">
                                        <label htmlFor="employeeType" className="block mb-2 text-sm font-medium text-textColor">
                                            Select User to Add
                                        </label>
                                        <select id="employeeType" className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5">
                                            <option disabled>Select User Type</option>
                                            <option value="employee">Employee</option>
                                        </select>
                                    </div>

                                    <div className="mt-2 grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-textColor ">
                                                Full name
                                            </label>
                                            <input
                                                id="name"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="John Doe"
                                                type="text"
                                                name="name"
                                                value={formdata.name}
                                                onChange={onChangeData}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="userEmail" className="block mb-2 text-sm font-medium text-textColor ">
                                                Email
                                            </label>
                                            <input
                                                id="userEmail"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="John@doe.com"
                                                type="email"
                                                name="email"
                                                value={formdata.email
                                                }
                                                onChange={onChangeData}
                                                required
                                            />
                                        </div>
                                    </div>



                                    <div className="mt-2 grid gap-6 mb-6 md:grid-cols-3">
                                        <div className="mb-6">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-textColor ">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="******"
                                                type="password"
                                                name="password"
                                                value={formdata.password
                                                }
                                                onChange={onChangeData}
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-textColor ">
                                                Confirm Password
                                            </label>
                                            <input
                                                id="confirmPassword"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="******"
                                                type="password"
                                                name="confirmPassword"
                                                value={formdata.confirmPassword
                                                }
                                                onChange={onChangeData}
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-textColor ">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phoneNumber"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="+91*********"
                                                type="number"
                                                name="phoneNumber"
                                                value={formdata.phoneNumber
                                                }
                                                onChange={onChangeData}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-2 grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-textColor">
                                                Department
                                            </label>
                                            <select
                                                id="department"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5"
                                            >
                                                <option>Choose a department</option>
                                                <option value="Developer">Web Developer</option>
                                                <option value="Designing">Designing</option>

                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="designation" className="block mb-2 text-sm font-medium text-textColor">
                                                Designation
                                            </label>
                                            <select
                                                id="designation"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5"
                                            >
                                                <option>Choose a Designation</option>
                                                <option value="Intern">Intern</option>
                                                <option value="Junior">Junior Engineer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-2 grid gap-6 mb-6 md:grid-cols-3">
                                        <div>
                                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-textColor">
                                                Country
                                            </label>
                                            <input
                                                id="country"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="India"
                                                type="text"
                                                name="country"
                                                value={formdata.country
                                                }
                                                onChange={onChangeData}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="state" className="block mb-2 text-sm font-medium text-textColor">
                                                State
                                            </label>
                                            <input
                                                id="state"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="Punjab"
                                                type="text"
                                                name="state"
                                                value={formdata.state
                                                }
                                                onChange={onChangeData}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-textColor">
                                                City
                                            </label>
                                            <input
                                                id="city"
                                                className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                                placeholder="Chandigarh"
                                                type="text"
                                                name="city"
                                                value={formdata.city
                                                }
                                                onChange={onChangeData}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-textColor ">
                                            Full Address
                                        </label>
                                        <textarea
                                            id="address"
                                            className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                            placeholder="Enter your current full address"
                                            rows={3}
                                            name="address"
                                            value={formdata.address
                                            }
                                            onChange={onChangeData}
                                            required

                                        />
                                    </div>

                                    <button type="submit" className="flex items-center text-sm text-center p-2 
                                    bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white mx-2"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="8.5" cy={7} r={4} />
                                            <line x1={20} y1={8} x2={20} y2={14} />
                                            <line x1={23} y1={11} x2={17} y2={11} />
                                        </svg>
                                        Add User
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default CreateEmployee