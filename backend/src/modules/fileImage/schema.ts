import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    path: String,
    createDate: Date
});

export default mongoose.model('fileImage', schema);
