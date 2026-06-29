import mongoose from "mongoose"


const QuestionSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },

    
    content:{
        type:String,
        required:true,
    },
},
{
    timestamps : true
})

export const Question = mongoose.model('Question', QuestionSchema);