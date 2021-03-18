const {Student} = require('./../models/student');

let studentAuth = (req,res,next) =>{
    let token = req.cookies.studentAuth;

    Student.findByToken(token,(err,student)=>{
        if(err) throw err;
        if(!student) return res.json({
            error:'there is no student logged in'
        });
        req.token = token;
        req.student = student;
        next();
    })
}
module.exports = { studentAuth }