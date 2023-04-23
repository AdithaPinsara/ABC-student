//mongoose model for program objects
const mongoose=require('mongoose');

const ProgramSchema=new mongoose.Schema(
    {
        name:{type: String, required: true},
        duration:{type: String, required: true},
        cost:{type: String, required: true},

    }
);

module.exports=mongoose.model("Program",ProgramSchema);