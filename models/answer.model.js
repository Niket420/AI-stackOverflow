import mongoose from "mongoose"


const AnswerSchema = new mongoose.Schema({
    userId : {
        type: Number,
        required: true
    },

    questionId : {
        type: Number,
        required:true,
    },

    isAccepted : {
        type: Boolean,
        default: false,
    },

    content:{
        type:String,
        required:true,
    },
},
{
    timestamps : true
})

export const Answer = mongoose.model('Answer', AnswerSchema);