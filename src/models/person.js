const { Schema, model } = require("mongoose");

const peopleSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number
    },
    socialServiceNumber: {
        type: Number
    },
    bloodType: {
        type: String
    }}
);

module.exports = model("people", peopleSchema);