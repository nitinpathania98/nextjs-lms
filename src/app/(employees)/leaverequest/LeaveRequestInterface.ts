import { ChangeEvent, FormEvent } from "react";

export interface LeaveRequestInterface {
    handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
    dataChange: (e: ChangeEvent<HTMLInputElement>) => void;
    formData: {
        leave_type: string;
        startDate: string;
        duration: string;
        purpose: string;
    };
}