import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ImageSchema = new Schema({ index: Number, path: String, name: String });

const schema = new Schema({
    name: String,
    alias: String,
    price: Number,
    inventory: Number,
    images: [ImageSchema],
    description: String,
    available: Boolean,
    createDate: Date,
    updateDate: Date
});

export default mongoose.model('products', schema);
