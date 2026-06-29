import mongoose from "mongoose"


const QuestionSchema = new mongoose.Schema({
    userId : {
        type: Number,
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