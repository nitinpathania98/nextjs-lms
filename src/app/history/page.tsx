// components/History.tsx
import React from 'react';
import BaseLayout from '@/app/components/BaseLayout';
import Navbar from '../components/Navbar';

const History = () => {
    // Mock data for demonstration
    const fullLeaves = 12;
    const remainingLeaves = 12;
    const medicalLeave = 1;
    const halfDayLeave = 1;
    const shortLeave = 1;

    return (
        <BaseLayout>
            <Navbar />
            <div className="p-6">
                <div className="bg-gray-200 p-4 rounded-md shadow-md mb-6">
                    <h2 className="text-xl font-bold mb-4">Leaves Overview</h2>
                    <div className="grid grid-cols-2 gap-6 px-2">
                        <div className="flex items-center justify-between py-2">
                            <span className="font-semibold">Full Leaves:</span>
                            <span className="text-green-500">{fullLeaves}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="font-semibold">Remaining Leaves:</span>
                            <span className="text-blue-500">{remainingLeaves}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="font-semibold">Medical Leave:</span>
                            <span className="text-red-500">{medicalLeave}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="font-semibold">Half Day Leave:</span>
                            <span className="text-purple-500">{halfDayLeave}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="font-semibold">Short Leave:</span>
                            <span className="text-yellow-500">{shortLeave}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 p-4 rounded-md shadow-md">
                    {/* Add your leave history section here */}
                    <h2 className="text-xl font-bold mb-4">Leave History</h2>
                    {/* Your leave history content goes here */}
                </div>
            </div>
        </BaseLayout>
    );
};

export default History;
