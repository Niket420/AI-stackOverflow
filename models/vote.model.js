import mongoose from "mongoose"


const VoteSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    targetType : {
        type: String,
        enum: ["Question", "Answer"],
        required:true,
    },

    targetId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    voteType:{
        type:String,
        enum: ["upvote", "downvote"],
        required:true,
    },
},
{
    timestamps : true
});

VoteSchema.index(
    { userId: 1, targetId: 1 },
    { unique: true }
);

export const Vote = mongoose.model('Vote', VoteSchema);