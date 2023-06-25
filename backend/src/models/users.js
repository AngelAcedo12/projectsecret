
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
        tokens:String,
        mensejes:[
            {
                username:{
                    type:String,
                    require:true,
                },
                Text:{
                    type:String,
                },
                isPublic:{
                    type:String,
                    require:["public","friends","anonimo"],
                    default:"anonimo",
                },
                likes:{
                    type:Number,
                }
                
            }
        ]
        

        },
    

    {
        versionKey:false,
        Timestamp:true
    }
)

export default mongoose.model('users', userSchema);