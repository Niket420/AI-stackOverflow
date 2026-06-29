import mongoose from "mongoose"


const TagSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        unique: true,

        trim: true,

        lowercase: true
    },
},
{
    timestamps : true
})

export const Tag = mongoose.model('Tag', TagSchema);