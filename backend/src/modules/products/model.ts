export interface IProduct {
    _id?: String;
    name: String;
    alias: String;
    price: Number;
    images: Array<any>;
    inventory: Number;
    linkShopee: String;
    description: String;
    available: Boolean;
    createDate: Date;
    updateDate: Date;
}