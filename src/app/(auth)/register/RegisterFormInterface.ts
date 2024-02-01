export interface RegisterFormInterface {
    formdata: {
        userName: string;
        email: string;
        password: string;
        
    };
    onChangeData: (e: any) => void;
    onRegister: (e: React.FormEvent<HTMLFormElement>) => void;
    errors: registerErrorType;
    loading: boolean;
}