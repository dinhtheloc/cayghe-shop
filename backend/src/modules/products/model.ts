export interface IProduct {
    _id?: String;
    name: String;
    alias: String;
    price: Number;
    arrayImage: Array<any>;
    inventory: Number;
    description: String;
    available: Boolean;
    createDate: Date;
    updateDate: Date;
}