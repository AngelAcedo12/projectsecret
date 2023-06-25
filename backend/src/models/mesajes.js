
import mongoose from 'mongoose';

const mensajesSchema = mongoose.Schema(
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
        },
        likes:{
            type:Number,
        }

    },
    {
        versionKey:false,
        Timestamp:true
    }

)
export default mongoose.model('mensaje', mensajesSchema);