//mongoose model for student objects
const mongoose=require('mongoose');

const StudentSchema=new mongoose.Schema(
    {
        name:{type: String, required: true},
        address:{type: String, required: true},
        contact:{type: String, required: true}, 
    }
);

module.exports=mongoose.model("Student",StudentSchema);