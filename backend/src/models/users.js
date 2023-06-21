
import mongoose from "mongoose";

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
        tokens:[{
            
                token:{
                    provedor:String,
                    token:String,
                }
            }
        ], 
        mensajes:{
            type:[MensajeSchema]
            
        },
            

        },
        


    {
        versionKey:false,
        Timestamp:true
    }
)

export default mongoose.model('users', userSchema);