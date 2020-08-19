const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating the schema for blog posts

// new schema takes an object as an argument
const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    } ,
    snippet:{
        type: String,
        required: true
    } ,
    body: {
        type: String,
        required: true
    }
}, {timestamps: true})

// mongoose.model creates a model from two arguments
// a) the name of the model
// a .... the name of the model must be the singular of the mongoDB collection
// b) the schema to make the model
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog