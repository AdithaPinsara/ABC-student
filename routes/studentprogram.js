const StudentProgram=require("../models/StudentProgram");
const router=require("express").Router();

//register Student with a Program
router.post("/", async(req,res)=>{
    const sid=req.query.sid;
    const pid=req.query.pid;
    const newStudentProgram=new StudentProgram({ "studentid":sid,"programid":pid});
    try{
        const savedStudentProgram=await newStudentProgram.save();
        res.status(200).json(savedStudentProgram);
    }catch(err){
        res.status(500).json(err);
    }
});

//view registration
router.get("/:id", async(req,res)=>{
    try {
        const studentprogram=await StudentProgram.findById(req.params.id);
        res.status(200).json(studentprogram);
    } catch (err) {
        res.status(500).json(err);
    }  
});

//delete registration
router.delete("/:id", async(req,res)=>{
    try { 
        await StudentProgram.findByIdAndDelete(req.params.id);
        res.status(200).json("Registration removed");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports=router;