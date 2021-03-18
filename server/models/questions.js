const mongoose = require('mongoose')

const questionSchema = mongoose.Schema ({
    question: {
        type: String,
        required: true
    },
    optionA: {
        type: String,
        required:true
    },
    optionB: {
        type: String,
        required:true
    },
    optionC: {
        type: String,
        required:true
    },
    optionD: {
        type: String,
        required:true
    },
    answer: {
        type: String,
        required: true
    },
    
    dateCreated: {
        type: Date, 
        default: new Date ()
    }
})

const Question = mongoose.model('Question', questionSchema)
module.exports = { Question }