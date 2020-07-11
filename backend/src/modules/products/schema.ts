import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    alias: String,
    price: Number,
    inventory: Number,
    description: String,
    available: Boolean,
    createDate: Date,
    updateDate: Date
});

export default mongoose.model('products', schema);
