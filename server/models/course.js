const mongoose = require ('mongoose')

const courseSchema = mongoose.Schema({
    courseCode:{
        type: String,
        required:true,
        unique:1
    },
    courseTitle:{
        type: String,
        required:true,
        
    },
    courseUnit:{
        type:Number,
        required:true,
        min:1,
        max:6
    },
    noOfQuestions:{
        type:Number,
        required:true,
    },
    examTime:{
        type:Number,
        required:true,
    },
    ownerId: {
        type:String,
        required:true
    }
}, {timestamps:true})

const Course = mongoose.model('Course', courseSchema)
module.exports = { Course }