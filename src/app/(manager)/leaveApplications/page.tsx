import React from 'react'
import Navbar from '@/app/components/Navbar'
import Sidebar from '@/app/components/Sidebar'
function LeaveApplication() {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Navbar />
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        <div className='w-auto  '>
                            <div className="flex flex-wrap justify-center w-full p-2">
                                <div className="cursor-pointer relative mx-2 my-2 rounded-lg p-3 border border-gray-300 bg-yellow-100 ">
                                    <div className=" card p-3 rounded-lg ">
                                        <div className="md:w-[300px] w-full">
                                            <div className="flex justify-between mb-3">
                                                <div className="flex items-center">
                                                    <div className="shadow-lg p-2 rounded-full text-center bg-yellow-400 text-white">
                                                        <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" />
                                                        </svg>
                                                    </div>
                                                    <div className="mx-2">
                                                    </div>
                                                </div>
                                                <div className="shadow-lg p-2 rounded-full text-xs font-bold text-center text-white bg-yellow-400">
                                                    Pending</div>
                                            </div>
                                            <div className="text-xs font-light my-2">
                                                Family vacation
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="mb-2">
                                                    <div className="text-xs mb-2 font-light text-gray-700">
                                                        From Date
                                                    </div>
                                                    <div className="text-xs">
                                                        Nov 1, 2023
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="text-xs mb-2 font-light text-gray-700">
                                                        To Date
                                                    </div>
                                                    <div className="text-xs">
                                                        Nov 5, 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative mx-2 my-2 rounded-lg p-3 border border-gray-300 bg-blue-100 ">
                                    <div className=" card p-3 rounded-lg ">
                                        <div className="md:w-[300px] w-full">
                                            <div className="flex justify-between mb-3">
                                                <div className="flex items-center">
                                                    <div className="shadow-lg p-2 rounded-full text-center bg-green-400 text-white">
                                                        <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                        </svg>
                                                    </div>
                                                    <div className="mx-2">
                                                    </div>
                                                </div>
                                                <div className="shadow-lg p-2 rounded-full text-xs font-bold text-center text-white  bg-green-400 ">
                                                    Approved
                                                </div>
                                            </div>
                                            <div className="text-xs font-light my-2"> Fever </div><div className="flex justify-between">
                                                <div className="mb-2">
                                                    <div className="text-xs mb-2 font-light text-gray-700">
                                                        From Date
                                                    </div>
                                                    <div className="text-xs">
                                                        Nov 10, 2023
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="text-xs mb-2 font-light text-gray-700">
                                                        To Date
                                                    </div>
                                                    <div className="text-xs">
                                                        Nov 12, 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </div>
        </>
    )
}

export default LeaveApplication