const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const config = require('../config/config').get(process.env.NODE_ENV);
const SALT_I =10;

const studentSchema = mongoose.Schema({
    matric:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlength:4
    },
    name:{
        type:String,
        maxlength:100
    },
    middlename:{
        type:String,
        maxlength:100
    },
    lastname:{
        type:String,
        maxlength:100
    },
    faculty:{
        type:String,
        maxlength:100
    },
    department:{
        type:String,
        maxlength:100
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type: String
    }
})

studentSchema.pre('save', function(next){
    var student = this;
    
    if(student.isModified('password')){
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err);

            bcrypt.hash(student.password,salt,function(err,hash){
                if(err) return next(err);
                student.password = hash;
                next();
            })
        })
    } else {
        next()
    }
})

studentSchema.methods.comparePassword = function(studentPassword,cb){
    bcrypt.compare(studentPassword,this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch);
    })
}

studentSchema.methods.generateToken = function(cb){
    var student = this;
    var token = jwt.sign(student._id.toHexString(),config.SECRET);

    student.token = token
    student.save(function(err,student){
        if(err) return cb(err);
        cb(null,student)
    })
}

studentSchema.statics.findByToken = function(token,cb){
    var student = this;
    jwt.verify(token,config.SECRET,function(err,decode){
        student.findOne({"_id":decode,"token":token},function(err,student){
            if(err) return cb(err);
            cb(null,student)
        })
    })
}

studentSchema.methods.deleteToken = function(token,cb){
    var student = this;
    
    student.update({$unset:{token:1}},(err,student)=>{
        if(err) return cb(err)
        cb(null,student)
    })
}


const Student = mongoose.model('Student', studentSchema)

module.exports = { Student }