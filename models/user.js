const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    facebookId: String, 
    admin: {
        type: Boolean,
        default: false,
    }
});

//hashing
userSchema.plugin(passportLocalMongoose);

//User as first argument. Collection named users, then give it to userSchema
module.exports = mongoose.model('User', userSchema);