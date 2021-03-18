const express = require ('express')
const bodyParser = require ('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require ('mongoose')
const config = require('./config/config').get(process.env.NODE_ENV)
const app = express();



mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)

const admin = require('./routes/api/admin')
const course = require('./routes/api/course')
const student = require('./routes/api/student')

app.use(bodyParser.json())
app.use(cookieParser())


app.use('/api/admin', admin)
app.use('/api/course', course)
app.use('/api/student', student)

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server is Running here`);
})