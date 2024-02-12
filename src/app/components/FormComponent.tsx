import React from 'react';
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Input, Label, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
});

const FormComponent: React.FC<{ handleSubmit: () => void }> = ({ handleSubmit }) => {
    const styles = useStyles();

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
                            <Label required htmlFor={"department-input"}>
                                Department
                            </Label>
                            <Input required type="text" id={"department-input"} />
                            <Label required htmlFor={"designation-input"}>
                                Designation
                            </Label>
                            <Input required type="text" id={"designation-input"} />
                            <Label required htmlFor={"country-input"}>
                                Country
                            </Label>
                            <Input required type="text" id={"country-input"} />
                            <Label required htmlFor={"designation-input"}>
                                State
                            </Label>
                            <Input required type="text" id={"state-input"} />
                            <Label required htmlFor={"city-input"}>
                                City
                            </Label>
                            <Input required type="text" id={"city-input"} />
                            <Label required htmlFor={"address-input"}>
                                Address
                            </Label>
                            <Input required type="text" id={"address-input"} />
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
    );
};

export default FormComponent;
