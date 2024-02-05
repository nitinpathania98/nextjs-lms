import { ChangeEvent, FormEvent } from "react";

export interface LeaveRequestInterface {
    handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
    dataChange: (e: any) => void;
    formdata: {
        leaveType: string;
        startDate: string;
        duration: string;
        purpose: string;
    };
    leaveTypes: { leave_type_id: number; leave_type_name: string }[];
}