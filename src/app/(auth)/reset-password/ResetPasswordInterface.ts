import { ChangeEvent, FormEvent } from "react";

export interface ResetPasswordInterface {
    submit: (e: FormEvent<HTMLFormElement>) => void;
    onChangeData: (e: ChangeEvent<HTMLInputElement>) => void;
    formdata: {
        password: string;
        cPassword: string;
    };
    loading: boolean;
    errors: undefined;
}