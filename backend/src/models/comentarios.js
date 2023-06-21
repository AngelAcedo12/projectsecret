import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        id: String,
        comments:[{
            username:String,
            comment: String
        }],
    },
    {
        versionKey:false,
        Timestamp:true
    }

)

export default mongoose.model("comments", commentSchema)