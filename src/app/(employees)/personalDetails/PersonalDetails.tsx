"use client"
import React from 'react'
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Input, Label, makeStyles } from '@fluentui/react-components';
import { PersonalDetailsInterface } from './PersonalDetailsInterface';
import UseDialog from '@/components/common/Dialog';

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
});
const PersonalDetails: React.FC<PersonalDetailsInterface> = ({
    handleSubmit,
    onChangeData,
    formdata,
    isModal,
    handleClose
}) => {
    const styles = useStyles();
    return (
        <UseDialog isOpen={isModal} closeModal={undefined} >
            <form onSubmit={handleSubmit}>
                <DialogBody>
                    <DialogTitle>Personal Details</DialogTitle>
                    <DialogContent className={styles.content}>

                        <Label required htmlFor="department">
                            Department
                        </Label>
                        <Input required type="text" id="department"
                            name="department"
                            value={formdata.department}
                            onChange={onChangeData} />

                        <Label required htmlFor="designation">
                            Designation
                        </Label>
                        <Input required type="text" id="designation"
                            name="designation"
                            value={formdata.designation}
                            onChange={onChangeData}
                        />

                        <Label required htmlFor="country">
                            Country
                        </Label>
                        <Input required type="text" id="country"
                            name="country"
                            value={formdata.country}
                            onChange={onChangeData}
                        />

                        <Label required htmlFor="state">
                            State
                        </Label>
                        <Input required type="text" id="state"
                            name="state"
                            value={formdata.state}
                            onChange={onChangeData}
                        />

                        <Label required htmlFor="city">
                            City
                        </Label>
                        <Input required type="text" id="city"
                            name="city"
                            value={formdata.city}
                            onChange={onChangeData}
                        />

                        <Label required htmlFor="address">
                            Address
                        </Label>
                        <Input required type="text" id="address"
                            name="address"
                            value={formdata.address}
                            onChange={onChangeData}
                        />

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
export default PersonalDetails;