const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    first_name: {type: String, required: [true,'first name is reqiured']},
    last_name: {type: String,required: [true,'last name is reqiured']},
    age: {type: Number, required: [true,'age is reqiured']},
}, {timestamps: true})

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;