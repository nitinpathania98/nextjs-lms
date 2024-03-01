"use client"
import React, { useEffect, useState } from 'react';
import LeaveHistoryTemplate from './LeaveHistoryTemplate';
import { LeaveHistoryInterface } from './LeaveHistoryInterface';
import EditRequestComponent from '../editRequest/page';

const initialValues = {
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
    status: '',
};

const History: React.FC = () => {
    const [leaveHistory, setLeaveHistory] = useState<LeaveHistoryInterface[]>([]);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [isModal, setModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<LeaveHistoryInterface | null>(null);

    useEffect(() => {
        const fetchLeaveHistory = async () => {
            try {
                let accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    console.error('Token not found. Redirect to login page.');
                    return;
                }

                const response = await fetch('http://localhost:8080/api/users/user/details', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const userDetails = await response.json();
                    const userLeaveRequests = userDetails[0].leaveRequests;
                    setLeaveHistory(userLeaveRequests);
                } else if (response.status === 401) {
                    // Token expired, try refreshing the token
                    const refreshResponse = await fetch('http://localhost:8080/api/refresh', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (refreshResponse.ok) {
                        const { accessToken: newAccessToken } = await refreshResponse.json();
                        localStorage.setItem('accessToken', newAccessToken);
                        // Retry fetching user details with the new access token
                        fetchLeaveHistory();
                    } else {
                        console.error('Failed to refresh token. Redirect to login page.');
                    }
                } else {
                    console.error('Failed to fetch user details');
                }
            } catch (error: any) {
                console.error('Error fetching user details:', error.message);
            }
        };
        fetchLeaveHistory();
    }, []);

    const openEditPopup = (item: LeaveHistoryInterface) => {
        setSelectedItem(item);
        setFormData(item);
        setModal(true);
    };

    const handleClosePopup = () => {
        setModal(false);
    };

    const handleFormSubmit = async (editedItem: any) => {
        try {
            const response = await fetch(`http://localhost:8080/api/leave-request/${editedItem.id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedItem),
            });
            if (response.ok) {
                const updatedLeaveHistory: any = leaveHistory.map(item => {
                    if (item.id === editedItem.id) {
                        return editedItem;
                    }
                    return item;
                });
                setLeaveHistory(updatedLeaveHistory);
                setModal(false);
                console.log('Edit successful');
            } else {
                console.error('Edit failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error editing item:', error);
        }
    };

    const handleDelete = async (deletedItemId: any) => {
        try {
            const response = await fetch(`http://localhost:8080/api/leave-request/${deletedItemId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            if (response.ok) {
                const updatedLeaveHistory = leaveHistory.filter(item => item.id !== deletedItemId);
                setLeaveHistory(updatedLeaveHistory);
                console.log('Delete successful');
            } else {
                console.error('Delete failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleEditItemUpdate = (updatedItem: LeaveHistoryInterface) => {
        // Update the item in leaveHistory array
        const updatedLeaveHistory = leaveHistory.map(item =>
            item.id === updatedItem.id ? updatedItem : item
        );
        setLeaveHistory(updatedLeaveHistory);
        setModal(false);
    };
    return (
        <>
            <EditRequestComponent
                isModal={isModal}
                item={selectedItem}
                onUpdate={handleEditItemUpdate}
                handleSubmit={handleFormSubmit}
                onChangeData={function (e: any): void {
                    throw new Error('Function not implemented.');
                }}
                formdata={{
                    leaveType: '',
                    startDate: '',
                    endDate: '',
                    reason: '',
                    id: '',
                    status:'',
                    UserId: undefined
                }}
                handleClose={handleClosePopup}
                formData={formData}
                setFormData={setFormData}
                leaveTypes={[]} />
            <LeaveHistoryTemplate
                leaveHistory={leaveHistory}
                openEditPopup={openEditPopup}
                onDelete={handleDelete}
                leaveType={''}
                startDate={''}
                endDate={''}
                reason={''}
                status={''}
                id={''}
            />
        </>
    );
};

export default History;
