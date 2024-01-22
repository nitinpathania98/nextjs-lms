export interface ResetPasswordInterface {
    submit: React.FormEventHandler<HTMLFormElement>;
    onChangeData: React.ChangeEventHandler<HTMLInputElement>;
    formdata: {
        password: string,
        cpassword: string,
    };
    loading: boolean;
    errors: undefined;
}