import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: {
            firstName: String,
            lastName: String
        }
    },
    email: String,
    password: String,
    phoneNumber: String,
    role: String,
    gender: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    createDate: Date,
    updateDate: Date
});


export default mongoose.model('users', schema);