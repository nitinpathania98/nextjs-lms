import { FormEvent, Dispatch, SetStateAction } from "react";

export interface PersonalDetailsInterface {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onChangeData: (e: any) => void;
    formdata: {
        userName: string;
        email: string;
        password: string;
        designation: string;
        department: string;
        phoneNumber: string;
        country: string;
        state: string;
        city: string;
        address: string;
        id: string;
        UserId: any;
    };
    isModal: boolean;
    handleClose: () => void;
    user: any; 
    formData: any; 
    setFormData: Dispatch<SetStateAction<any>>; 
}
