import { FormEvent, Dispatch, SetStateAction } from "react";

export interface EditRequestInterface {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onChangeData: (e: any) => void;
    formdata: {
        leaveType: string;
        startDate: string;
        endDate: string;
        reason: string;
        status: string;
        id: string;
        UserId: any;
    };
    isModal: boolean;
    handleClose: () => void;
    item: any;
    formData: any;
    setFormData: Dispatch<SetStateAction<any>>;
    leaveTypes: { leave_type_id: number; leave_type_name: string }[];
}
