export class User {
    id?: string;
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
    gender: string;
    isDeleted?: boolean;
    createDate: Date;
    updateDate: Date;
    token?: string;
}

