import mongoose from 'mongoose'

const DB_URI = process.env.DB_URI

const dbConnect= async ()=>{
    await mongoose.connect("mongodb+srv://angelacedomelli:VXhXcX7F9m9LMluA@temporalsecrets.snpzrpl.mongodb.net/Test?retryWrites=true&w=majority",{
        
    
        useNewUrlParser: true,
        useUnifiedTopology: true
        
        })
}

export default dbConnect

