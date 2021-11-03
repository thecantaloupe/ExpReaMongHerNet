//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection")

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

const PeopleSchema = new Schema({
    name: String,
    image: String,
    title: String
})

const People = model("People", PeopleSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = People