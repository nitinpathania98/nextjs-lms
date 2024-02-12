import React from 'react';
import { Stack, Text, ComboBox, TextField, PrimaryButton } from '@fluentui/react';
import Navbar from '../../components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import { LeaveRequestInterface } from './LeaveRequestInterface';
import { Select } from '@fluentui/react-components';


const LeaveRequestTemplate: React.FC<LeaveRequestInterface> = ({
    dataChange,
    handleOnSubmit,
    formdata,
    leaveTypes,
}) => {
    return (
        <Stack horizontal verticalFill>
            <Sidebar />
            <Stack grow >
                <Navbar />
                <Stack horizontalAlign="center" verticalAlign="start" styles={{ root: { padding: '20px' } }}>
                    {/* Leave Request */}
                    <Stack styles={{ root: { maxWidth: '80%', width: '100%' } }} tokens={{ childrenGap: 20 }}>
                        <Text variant="xLarge" style={{ marginBottom: '20px' }}>Leave Request</Text>
                        <form onSubmit={handleOnSubmit} method='POST'>
                            <Stack tokens={{ childrenGap: 15 }}>
                                <label htmlFor="leaveType" className="block text-sm font-medium text-textColor">
                                    Leave Type:</label>
                                <Select
                                    id="leaveType"
                                    required
                                    name='leaveType'
                                    onChange={dataChange}
                                    value={formdata.leaveType}
                                    className="cursor-pointer bg-cardColor border border-card text-textColor text-sm rounded-lg focus:outline-none block w-full p-2.5"
                                >
                                    <option value="" disabled>Select Leave Type</option>
                                    {leaveTypes.map((leaveType) => (
                                        <option key={leaveType.leave_type_id} value={leaveType.leave_type_name}>
                                            {leaveType.leave_type_name}
                                        </option>
                                    ))}
                                </Select>
                                <Stack horizontal tokens={{ childrenGap: 15 }}>
                                    <TextField
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        label="Start Date"
                                        value={formdata.startDate}
                                        onChange={dataChange}
                                        required
                                    />
                                    <TextField
                                        type="text"
                                        id="duration"
                                        name="duration"
                                        label="Duration"
                                        value={formdata.duration}
                                        onChange={dataChange}
                                        required
                                        placeholder="10 days"
                                    />
                                </Stack>
                                <TextField
                                    type="text"
                                    id="purpose"
                                    name="purpose"
                                    label="Leave Purpose"
                                    value={formdata.purpose}
                                    onChange={dataChange}
                                    required
                                    placeholder="Give reason for leave"
                                />
                                <PrimaryButton type='submit' >Submit Leave Request</PrimaryButton>
                            </Stack>
                        </form>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default LeaveRequestTemplate;
