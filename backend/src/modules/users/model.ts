
export interface IUser {
    _id?: String;
    name: {
        firstName: String;
        lastName: String;
    };
    email: String;
    password: String;
    phoneNumber: String;
    role: String;
    gender: String;
    isDeleted?: Boolean;
    createDate: Date;
    updateDate: Date;
}