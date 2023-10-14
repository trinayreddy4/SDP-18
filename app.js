const mongoose =require('mongoose');
const express = require('express');
const app = express();
mongoose.connect('mongodb://localhost:27017/sdp', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
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

const Section =new mongoose
const User = mongoose.model('User', UserSchema);
const student = mongoose.model('student',Student);
const faculty = mongoose.model('faculty',Faculty);


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.post('/api/addStudent', async (req,res)=>{
    const name=req.body.Name;
    const email=req.body.Email;
    const phone=req.body.Phone;
    const section=req.body.Section;
    const sche=new Student(
        {
            name:name,
            email:email,
            phone:phone,
            section:section
        }
    )
    await sche.save();
    res.json(sche);
})

app.listen(3000, () => console.log('Server started'));