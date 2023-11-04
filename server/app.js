const mongoose =require('mongoose');
const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const path = require('path');
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/sdp'
).then(()=>console.log("Connected Db"))
const db = mongoose.connection;
// app.get('/*', function(req, res) {res.sendFile(path.join(__dirname + '../../public/index.html')); });
app.use(require('./Routes/login'));
const Student =new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        section:{
            type:String,
            required:true
        },
        grades1:Number
        ,
        grades2:Number
        ,
        grades3:Number
        ,
        grades4:Number
        ,
        grades5:Number     
});

 const Faculty=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    employee_id:{
        type:Number,
        required:true
    }
 });

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
  });

const Section =new mongoose.Schema(
    {
        Sectionname:String,
        id1:Number,
        id2:Number,
        id3:Number,
        id4:Number,
        id5:Number
    }
);
const User = mongoose.model('User', UserSchema);
const student = mongoose.model('student',Student);
const faculty = mongoose.model('faculty',Faculty);
const section = mongoose.model("section",Section);


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.post('/api/addStudent', async (req,res)=>{
    
    const sche=student(req.body)
    await sche.save();
    res.send(sche);
})
app.post('/api/addFaculty', async (req,res)=>{
    
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phno;
    const empId=req.body.empId;
    const sche=new Faculty(
        {
            name:name,
            email:email,
            phone:phone,
            employee_id:empId
        }
    )
    await Faculty.save(sche);
    res.status(201).json({ message: 'Document created successfully' });
    res.json(sche);

    console.log(req.body);
})

app.listen(3000, () => console.log('Server started'));