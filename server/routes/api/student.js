const express = require('express')
const router = express.Router();

const { Student } = require ('../../models/student')
const { studentAuth } = require ('../../middleware/studentAuth')

router.post('/register',(req,res)=>{
    const student = new Student(req.body)

    student.save((err,doc)=>{
        // if(err) return res.json({success:false});
        if(err) return res.json({send:err});

        res.status(200).json({
            success:true,
            student:doc
        })
    })
})

router.post('/sign-in',(req,res)=>{
    Student.findOne({'matric':req.body.matric},(err,student)=>{
        if(!student) return res.json({isAuth:false,message:'Auth failed, Student ID not registered'})

        student.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false, 
                message:'Wrong password'
            });

            student.generateToken((err,student)=>{
                if(err) return res.status(400).send(err);
                res.cookie('studentAuth',student.token).json({
                    isAuth:true,
                    id:student._id,
                    matric:student.matric
                })
            })

        })
    })
})


router.get('/sign-out',studentAuth, (req,res)=>{
    req.student.deleteToken(req.token,(err,student)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})

router.get('/all',(req,res)=>{
    Student.find({},(err,students)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(students)
    })
})

router.get('/auth',studentAuth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.student._id,
        matric:req.student.matric,
        name:req.student.name,
        middlename:req.student.middlename,
        lastname:req.student.lastname,
        faculty: req.student.faculty,
        department: req.student.department
    })
})


module.exports = router