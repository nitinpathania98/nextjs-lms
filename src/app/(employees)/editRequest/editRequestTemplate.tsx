"use client"
import React from 'react'
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Input, Label, Select, Textarea, makeStyles } from '@fluentui/react-components';
import { EditRequestInterface } from './editRequestInterface';
import UseDialog from '@/components/common/Dialog';
import { PrimaryButton, Stack, Text, TextField } from '@fluentui/react';

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
});
const EditRequestTemplate: React.FC<EditRequestInterface> = ({
    handleSubmit,
    onChangeData,
    formdata,
    isModal,
    handleClose,
    leaveTypes,
}) => {
    const styles = useStyles();
    return (
        <UseDialog isOpen={isModal} closeModal={undefined} >
            <form onSubmit={handleSubmit}>
                <DialogBody>
                    <DialogTitle>Edit Leave Request</DialogTitle>
                    <DialogContent className={styles.content}>

                        <Stack horizontalAlign="center" verticalAlign="start" styles={{ root: { padding: '20px' } }}>
                            {/* Leave Request */}
                            <Stack styles={{ root: { maxWidth: '80%', width: '100%' } }} tokens={{ childrenGap: 20 }}>
                                <Text variant="xLarge" style={{ marginBottom: '20px' }}>Leave Request</Text>
                                <form onSubmit={handleSubmit} method='POST'>
                                    <Stack tokens={{ childrenGap: 15 }}>
                                        <label htmlFor="leaveType" className="block text-sm font-medium text-textColor">
                                            Leave Type:</label>
                                        <Select
                                            id="leaveType"
                                            required
                                            name='leaveType'
                                            onChange={onChangeData}
                                            value={formdata.leaveType}
                                            className="cursor-pointer bg-cardColor text-textColor text-sm rounded-lg focus:outline-none block w-full"
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
                                                onChange={onChangeData}
                                                required
                                            />
                                            <TextField
                                                type="date"
                                                id="endDate"
                                                name="endDate"
                                                label="End Date"
                                                value={formdata.endDate}
                                                onChange={onChangeData}
                                                required
                                            />
                                        </Stack>

                                        <Field label="Leave reason">
                                            <Textarea
                                                appearance="outline"
                                                placeholder="type here..."
                                                resize="both"
                                                id="reason"
                                                name="reason"
                                                value={formdata.reason}
                                                onChange={onChangeData}
                                                required
                                            />
                                        </Field>
                                    </Stack>
                                </form>
                            </Stack>
                        </Stack>

                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary" onClick={handleClose}>Close</Button>
                        </DialogTrigger>
                        <Button type="submit" appearance="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </DialogBody>
            </form>
        </UseDialog>
    )
}
export default EditRequestTemplate;