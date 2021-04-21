const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { //validations for username field
        type: String,
        required: true,
        unique: true,
        trim: true, //trim whitespace off end
        minlength: 3 //must be at least 3 char long
    },
}, {
    timestamps: true, //when created or modified
})

const User = mongoose.model('User', userSchema)

module.exports = User