
export interface RegistrationFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: Date;
    password: string;
    confirmPassword: string;
}

export type RegistrationRequest = RegistrationFormValues;
