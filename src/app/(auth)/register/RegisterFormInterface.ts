export interface RegisterFormInterface {
    formdata: {
        employeeType: string;
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        designation: string;
        department: string;
        phoneNumber: string;
        country: string;
        state: string;
        city: string;
        address: string;
    };
    onChangeData: (e: any) => void;
    onRegister: (e: React.FormEvent<HTMLFormElement>) => void;
    errors: registerErrorType;
    loading: boolean;
}