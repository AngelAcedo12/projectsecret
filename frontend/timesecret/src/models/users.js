import { default as mongoose, default as moongose } from "mongoose";

const userSchema = new moongose.Schema(
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
                    require:true,
                    type:String,
                },
                isPublic:{
                    type:String,
                    require:["public","friends","anonimo"],
                    
                },
                likes:{
                    type:Number,
                }
                
            }
 
        ],
        typePerfil:{
            type:String,
            require:["public","friends","anonimo"],
            default:"anonimo"
        }

        },
    

    {
        versionKey:false,
        Timestamp:true
    }
)

export default mongoose.models.users || mongoose.model('users', userSchema);