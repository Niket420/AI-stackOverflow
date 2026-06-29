import mongoose from "mongoose"


const CommentSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },

    targetType: {
        type: String,
        enum: ["Question", "Answer"],
        required: true
    },

    targetId: {
        type: mongoose.Schema.Types.ObjectId,
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