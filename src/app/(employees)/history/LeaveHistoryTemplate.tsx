import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import { LeaveHistoryInterface } from './LeaveHistoryInterface';
import Navbar from '@/app/components/Navbar';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn } from '@fluentui/react';
import { Button } from '@fluentui/react-components';
import { DeleteRegular, EditRegular } from '@fluentui/react-icons';

const LeaveHistoryTemplate: React.FC<LeaveHistoryInterface> = ({ leaveHistory, openEditPopup, onDelete }) => {

    // Custom render function for Actions column
    const renderActionsColumn: IColumn['onRender'] = (item, _index, _column) => {
        // Conditionally render the "Edit" button based on the status
        if (item.status === 'pending') {
            return (
                <div>
                    <Button aria-label="Edit" icon={<EditRegular />} onClick={() => handleEdit(item)} />
                    <Button aria-label="Delete" icon={<DeleteRegular />} onClick={() => handleDelete(item)} />
                </div>
            );
        } else {
            // For other statuses (e.g., 'approved', 'rejected'), render an empty <div> or null
            return null; // or return <div />; depending on your preference
        }
    };

    const handleEdit = (item: any) => {
        // Call the edit handler passed from props
        if (item.status === 'pending') {
            // Call the edit handler passed from props
            openEditPopup(item);
        } else {
            // Optionally, you can show a toast or message indicating that the request cannot be edited
            console.log('Cannot edit this request because the status is not pending.');
        }
    };

    // Function to handle delete action
    const handleDelete = (item: any) => {
        // Call the delete handler passed from props
        onDelete(item.id);
    };

    const columns: IColumn[] = [
        { key: 'column1', name: 'Leave Type', fieldName: 'leaveType', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Start Date', fieldName: 'startDate', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'EndDate', fieldName: 'endDate', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Reason', fieldName: 'reason', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column5', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column6', name: 'Actions', fieldName: 'actions', minWidth: 100, maxWidth: 200, isResizable: true, onRender: renderActionsColumn },
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
