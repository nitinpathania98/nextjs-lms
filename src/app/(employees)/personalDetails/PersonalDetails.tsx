"use client"
import React from 'react'
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Input, Label, Select, makeStyles } from '@fluentui/react-components';
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
    handleClose,
    country,
    state=[],
    city=[],
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

                        <Select
                            id="country"
                            required
                            name='country'
                            onChange={onChangeData}
                            value={formdata.country}
                            className="cursor-pointer bg-cardColor text-textColor text-sm rounded-lg focus:outline-none block w-full"
                        >
                            <option value="" disabled>Select Leave Type</option>
                            {country.map((country: any) => (
                                <option key={country._id} value={country.country_name}>
                                    {country.country_name}
                                </option>
                            ))}
                        </Select>

                        <Label required htmlFor="state">
                            State
                        </Label>
                        <Select
                            id="state"
                            required
                            name='state'
                            onChange={onChangeData}
                            value={formdata.state}
                            className="cursor-pointer bg-cardColor text-textColor text-sm rounded-lg focus:outline-none block w-full"
                        >
                            <option value="" disabled>Select State</option>
                            {state.map((state: any) => (
                                <option key={state._id} value={state.state_name}>
                                    {state.state_name}
                                </option>
                            ))}
                        </Select>

                        <Label required htmlFor="city">
                            City
                        </Label>
                        <Select
                            id="city"
                            required
                            name='city'
                            onChange={onChangeData}
                            value={formdata.city}
                            className="cursor-pointer bg-cardColor text-textColor text-sm rounded-lg focus:outline-none block w-full"
                        >
                            <option value="" disabled>Select City</option>
                            {city.map((city: any) => (
                                <option key={city._id} value={city.city_name}>
                                    {city.city_name}
                                </option>
                            ))}
                        </Select>
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