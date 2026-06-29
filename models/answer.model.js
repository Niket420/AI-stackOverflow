import mongoose from "mongoose"


const AnswerSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    questionId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
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