
import mongoose from "mongoose";
import mesajes from "./mesajes";

const userSchema = new mongoose.Schema(
    {   
        username:{
            type:String,
            unique:true,
            require:true,
        },
        password:{
            type:String
        },
        email:{
            type:String,
            unique:true,
            require:true,
        },
        tokens:String,
        mensajes:{
            type:mesajes,
        }
        

        },
        


    {
        versionKey:false,
        Timestamp:true
    }
)

export default mongoose.model('users', userSchema);