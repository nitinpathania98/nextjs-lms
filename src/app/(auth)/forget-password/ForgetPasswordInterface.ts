export interface ForgetPasswordInterface {
    submit: React.FormEventHandler<HTMLFormElement>;
    onChangeData: React.ChangeEventHandler<HTMLInputElement>;
    formdata: {
        email: string;
    };
    loading: boolean;
    errors: any;
}