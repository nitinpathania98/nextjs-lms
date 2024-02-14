"use client"
import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Input, Label, makeStyles } from '@fluentui/react-components';
import toast from 'react-hot-toast';

const initialValues = {
    userName: "",
    email: "",
    password: "",
    designation: "",
    department: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    address: "",
};

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
});
const PersonalDetails: React.FC = () => {
    const [formdata, setFormData] = useState(initialValues);
    const styles = useStyles();

    const onChangeData = (e: any) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

    }
    return (
        <Dialog modalType="non-modal">
            <DialogTrigger disableButtonEnhancement>
                <Button>Edit Details</Button>
            </DialogTrigger>
            <DialogSurface aria-describedby={undefined}>
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
                                <Button appearance="secondary">Close</Button>
                            </DialogTrigger>
                            <Button type="submit" appearance="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </DialogBody>
                </form>
            </DialogSurface>
        </Dialog>
    )
}
export default PersonalDetails