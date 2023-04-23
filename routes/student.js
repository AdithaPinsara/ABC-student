const Student=require("../models/Student");
const router=require("express").Router();
const {paginatedResults}=require('./pagination'); 

//save Student
router.post("/", async(req,res)=>{
    const newStudent=new Student(req.body);
    try{
        const savedStudent=await newStudent.save();
        res.status(200).json(savedStudent);
    }catch(err){
        res.status(500).json(err);
    }
});

//update Student
router.put("/:id", async(req,res)=>{
    try {
        const updatedStudent=await Student.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },{
                new:true
            }
        );
        res.status(200).json(updatedStudent);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete Student
router.delete("/:id", async(req,res)=>{
    try { 
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json("Student deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

//search Student 
router.get("/:id", async(req,res)=>{
    try {
        const student=await Student.findById(req.params.id);
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json(err);
    }  
});

//load all students
router.get("/", paginatedResults(Student), async(req,res)=>{
    res.json(res.paginatedResults);
})


module.exports=router;