
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        email:{
            type:String,
            unique:true
        },
        porVer:[
            {
                nombre: String
            }
        ],
    },
    {
        versionKey:false,
        Timestamp:true
    }
)

export default mongoose.model('users', userSchema);