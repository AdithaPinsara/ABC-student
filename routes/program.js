const Program=require("../models/Program");
const router=require("express").Router();
const {paginatedResults}=require('./pagination');

//save Program
router.post("/", async(req,res)=>{
    const newProgram=new Program(req.body);
    try{
        const savedProgram=await newProgram.save();
        res.status(200).json(savedProgram);
    }catch(err){
        res.status(500).json(err);
    }
});

//update Program
router.put("/:id", async(req,res)=>{
    try {
        const updatedProgram=await Program.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },{
                new:true
            }
        );
        res.status(200).json(updatedProgram);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete Program
router.delete("/:id", async(req,res)=>{
    try {
        await Program.findByIdAndDelete(req.params.id);
        res.status(200).json("Program deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

//search Program 
router.get("/:id", async(req,res)=>{
    try {
        const program=await Program.findById(req.params.id);
        res.status(200).json(program);
    } catch (err) {
        res.status(500).json(err);
    }
});

//load all programs
router.get("/", paginatedResults(Program), async(req,res)=>{
    res.json(res.paginatedResults);
})


module.exports=router;