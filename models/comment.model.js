import mongoose from "mongoose"


const CommentSchema = new mongoose.Schema({
    userId : {
        type: Number,
        required: true
    },

    questionId : {
        type: Number,
        required:true,
    },

    answerId : {
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

export const Comment = mongoose.model('Comment', CommentSchema);