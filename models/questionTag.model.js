import mongoose from "mongoose"


const QuestionTagSchema = new mongoose.Schema({
    tagId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Tag",
        required: true
    },

    questionId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Question",
        required:true,
    },

},
{
    timestamps : true
})

QuestionTagSchema.index(

    { questionId: 1, tagId: 1 },

    { unique: true }

);

export const QuestionTag = mongoose.model('QuestionTag', QuestionTagSchema);