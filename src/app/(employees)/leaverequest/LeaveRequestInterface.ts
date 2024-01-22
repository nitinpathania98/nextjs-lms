import { ChangeEvent, FormEvent } from "react";

export interface LeaveRequestInterface {
    handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
    dataChange: (e: ChangeEvent<HTMLInputElement>) => void;
    formData: {
        leaveType: string;
        startDate: string;
        endDate: string;
        leaveReason: string;
    };
}