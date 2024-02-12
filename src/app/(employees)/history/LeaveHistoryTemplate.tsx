import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import { LeaveHistoryInterface } from './LeaveHistoryInterface';
import Navbar from '@/app/components/Navbar';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn } from '@fluentui/react';

const LeaveHistoryTemplate: React.FC<LeaveHistoryInterface> = ({ leaveHistory }) => {
    const columns: IColumn[] = [
        { key: 'column1', name: 'Leave Type', fieldName: 'leaveType', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Start Date', fieldName: 'startDate', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Duration', fieldName: 'duration', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Reason', fieldName: 'purpose', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column5', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-auto">
                <Navbar />
                <div className="mx-auto max-w-screen-2xl p-4 md:p-2 2xl:p-5">
                    <div className='w-auto'>
                        <div className='p-1'>
                            <div className="bg-gray-200 p-4 rounded-md shadow-md">
                                <h2 className="text-xl md:text-2xl mb-4">Leave History</h2>
                                <div style={{ overflowY: 'auto' }}>
                                    <DetailsList
                                        items={leaveHistory}
                                        columns={columns}
                                        layoutMode={DetailsListLayoutMode.fixedColumns}
                                        selectionMode={SelectionMode.none}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaveHistoryTemplate;
