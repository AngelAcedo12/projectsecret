import mongoose, { Schema } from "mongoose";

const punctuationSchema = new Schema(
    {
        username: {
            type: String,
            
        },
        puntuations:[{
            
            film:{
                type:String,
                
            }, 
            puntuation: {
                type:String,
            } ,
        }],
    },
    {
        versionKey:false,
        Timestamp:true
    }


)

export default mongoose.model("punctuations", punctuationSchema)