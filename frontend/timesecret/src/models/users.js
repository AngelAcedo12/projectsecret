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
        
        typePerfil:{
            type:String,
            require:["public","friends","anonimo"],
            default:"anonimo"
        },
        amigos:[
            {
                username:String,
                
            }
           
        ],
        MngLikes:[
        ]
        },
    

    {
        versionKey:false,
        Timestamp:true
    }
)

export default mongoose.models.users || mongoose.model('users', userSchema);