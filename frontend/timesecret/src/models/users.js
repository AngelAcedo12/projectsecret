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
        typePerfil:{
            type:String,
            require:["public","friends","anonimo"],
            default:"anonimo"
        },
        biografia:{
            type:String,
        },
        
        },
    

    {
        versionKey:false,
        Timestamp:true
    }
)

export default mongoose.models.users || mongoose.model('users', userSchema);