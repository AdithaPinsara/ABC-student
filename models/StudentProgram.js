//mongoose model for registration objects
const mongoose=require('mongoose');

const StudentProgramSchema=new mongoose.Schema(
    {
        studentid:{type: mongoose.Schema.Types.ObjectId, ref: 'students', required: true},
        programid:{type: mongoose.Schema.Types.ObjectId, ref: 'programs', required: true}

    },
    {timestamps: true} 
);

StudentProgramSchema.index({ studentid: 1, programid: 1 }, { unique: true }); //to validate that same student won't register for a program twice

module.exports=mongoose.model("StudentProgram",StudentProgramSchema);