import mongoose from "mongoose"


const QuestionTagSchema = new mongoose.Schema({
    tagId : {
        type: Number,
        required: true
    },

    questionId : {
        type: Number,
        required:true,
    },

},
{
    timestamps : true
})

export const QuestionTag = mongoose.model('QuestionTag', QuestionTagSchema);