const express=require('express');
const app=express();
const mongoose=require('mongoose');
const students=require('./routes/student');
const programs=require('./routes/program');
const studentprograms=require('./routes/studentprogram');

//database connection
mongoose.connect("mongodb+srv://admin:admin123@cluster0.4qr11ja.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("database connected")
).catch((err)=>console.log(err));

app.use(express.json());
app.use("/api/students",students);
app.use("/api/programs",programs);
app.use("/api/studentprograms",studentprograms);  

//testing on port 3000
app.listen(3000, ()=>{
    console.log("api running"); 
});