import dbConnect from "@/config/mongodb";
import users from "@/models/users";
import { encryptPassword } from "@/utils/funcionesEncripter";

dbConnect()

async function GET (request) {
    
    const usersFInd = await users.find();
   return new Response(JSON.stringify({usersFInd}))

    
      
    
    
}

async function POST (request) {


    const body = await request.json();
    let {username,email,password} = body

    const nuevoBody = {
        username,
        email,
        typePerfil:"anonimo",
        password:await encryptPassword(password),
      
    }
    try{
        const data = await users.create(nuevoBody)
        
       
   
       return new Response(JSON.stringify(true))
    }catch(err){
        console.log(err)
        return new Response(JSON.stringify(false))
    }
    
   



}




async function PUT  (request){
    const body = await request.json()
    const {username,biografia} = body
   const name = username

    try{
        const filter= {username:name}
        let userActual = await users.findOne(filter)
        console.log(userActual);
        userActual['biografia']=biografia
        console.log(userActual);

        await users.replaceOne(filter,userActual)
        return new Response(JSON.stringify(true))

    }catch(err){
        console.log(err);
        return new Response(JSON.stringify(false))
    }
}


/** 
const updateItem = async (req, res) => {
    const { username, idFilm } = req
    const data = await usermodel.findOneAndUpdate(
        {username: username},
        {$push: {porVer: {nombre: idFilm}}},
        {upsert: true}
    )
    res.send(data)
}
*/
export { GET, POST, PUT };

