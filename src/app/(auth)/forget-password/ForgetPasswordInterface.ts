import { ChangeEvent, FormEvent } from "react";

export interface ForgetPasswordInterface {
    submit: (e: FormEvent<HTMLFormElement>) => void;
    onChangeData: (e: ChangeEvent<HTMLInputElement>) => void;
    formdata: {
        email: string;
    };
    loading: boolean;
    errors: any;
}