const express = require('express');
const router = express.Router();


const { Admin } = require('../../models/admin')
const { adminAuth } = require('../../middleware/adminAuth')


router.post('/register-admin',(req,res)=>{
    const admin = new Admin(req.body)

    admin.save((err,doc)=>{
        // if(err) return res.json({success:false});
        if(err) return res.json({send:err});

        res.status(200).json({
            success:true,
            admin:doc
        })
    })
})


router.post('/login',(req,res)=>{
    Admin.findOne({'adminID':req.body.adminID},(err,admin)=>{
        if(!admin) return res.json({isAuth:false,message:'Auth failed, Admin ID not registered'})

        admin.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false,
                message:'Wrong password'
            });

            admin.generateToken((err,admin)=>{
                if(err) return res.status(400).send(err);
                res.cookie('adminAuth',admin.token).json({
                    isAuth:true,
                    id:admin._id,
                    adminID:admin.adminID
                })
            })

        })
    })
})

router.get('/logout',adminAuth,(req,res)=>{
    req.admin.deleteToken(req.token,(err,admin)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})

router.get('/all',(req,res)=>{
    Admin.find({},(err,admins)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(admins)
    })
})


router.get('/adminAuth',adminAuth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.admin._id,
        adminID:req.admin.adminID,
        name:req.admin.name,
        lastname:req.admin.lastname
    })
})

module.exports = router;