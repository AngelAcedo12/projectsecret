import mongoose from 'mongoose'
import nextConfig from '../../next.config'

const DB_URI = nextConfig.env.DB_URI

const dbConnect= async ()=>{
    try{
        mongoose.connect(DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
            
            })
            console.log("Coneceted");
    }catch(err){
        console.log(err);
    }
   

}

export default dbConnect

