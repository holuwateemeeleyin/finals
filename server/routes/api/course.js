const express = require('express')
const router = express.Router();

const { Course } = require ('../../models/course')
const { Admin } = require('../../models/admin')

router.post('/add-course',(req,res)=>{
    const course = new Course(req.body)
    course.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            courseId: doc._id

        })
    })
})

//UPDATE //
router.post('/course-update',(req,res)=>{
    Course.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        res.json({
            success:true,
            doc
      })
    })    
})
  
//DELETE
router.delete('/delete-course', (req,res)=>{
    let id=req.query.id;
    Course.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})


router.get('/admin-exam-details',(req,res)=>{
    Course.find({ownerId:req.query.admin}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

router.get('/getcourse',(req,res)=>{
    let id = req.query.id;

    Course.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

router.get('/getCourseDetails',(req,res)=>{
    let id = req.query.id;

    Admin.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name
        })
    })
})


router.get('/all-courses',(req,res)=>{
    //localhost:3001/api/questions?skip=3&limit=2&order=asc
    let skip = parseInt(req.query.skip)
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    //ORDER = asc || desc
    Course.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})




module.exports = router