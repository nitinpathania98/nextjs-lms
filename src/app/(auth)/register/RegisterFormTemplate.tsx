// RegisterForm.tsx
import React from 'react';
import { RegisterFormInterface } from './RegisterFormInterface';
import Link from 'next/link';

const RegisterFormTemplate: React.FC<RegisterFormInterface> = ({
    formdata,
    onChangeData,
    onRegister,
    errors,
    loading,
}) => {
    return (
        <section >
            <div className="flex items-center justify-center py-5">
                <div className="xl:mx-auto xl:w-4/5 mx-auto  card rounded-lg shadow py-2 bg-transparent  ">

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
                    <div className='w-full p-2  '>
                        <div className='p-1 '>
                            <div className="flex justify-between items-center my-2 bg-card p-2 rounded-lg mb-2">
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

                                <div className="mt-2 grid gap-6 mb-3 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="userName" className="block mb-2 text-sm font-medium text-textColor ">
                                            Full name
                                        </label>
                                        <input
                                            id="userName"
                                            className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                            placeholder="John Doe"
                                            type="text"
                                            name="userName"
                                            value={formdata.userName}
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
                                        <span className='text-xs  text-red-500'>{errors?.Email}</span>
                                    </div>
                                </div>



                                <div className="mt-2 grid gap-6 mb-3 md:grid-cols-1">
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-textColor ">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            className="bg-card border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                                            placeholder="******"
                                            type="password"
                                            name="password"
                                            value={formdata.password}
                                            onChange={onChangeData}
                                            required
                                        />
                                        <span className='text-xs text-red-500'>{errors?.Password}</span>
                                    </div>
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
                                    {loading ? "Processing" : "   Add User"}

                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterFormTemplate;
