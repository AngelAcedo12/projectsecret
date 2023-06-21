import mongoose from 'mongoose'

const DB_URI = process.env.DB_URI

const dbConnect= async ()=>{
    await mongoose.connect(DB_URI,{
        autoIndex:true,
        
        
        })
}

export default dbConnect

