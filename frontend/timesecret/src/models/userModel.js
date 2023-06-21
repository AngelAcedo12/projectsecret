
import { Schema, model, models } from "mongoose";

const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
    },email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,        
    }


},
{
    versionKey: false,
    timestamps: true,
}


);

const User = models.User || model('User', userSchema);
export default User;