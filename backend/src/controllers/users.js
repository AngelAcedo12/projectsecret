import jwt from "jsonwebtoken";
import usermodel from "../models/users.js";
import { encryptPassword } from "../utils/funcionesEncripter.js";
const getItems = async (req, res) => {
    console.log("obtener items");
    const data = await usermodel.find({});
    res.send(data)
}
const getItem = async (req, res) => {
    console.log("obtener 1 item");
    
    const user = req.params.user
 
        const data = await usermodel.find({username:user})
         
        if(data.length > 0){
            var token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 , 
                email: data.email,
                username: data.username,
            },process.env.SECRET)
            
            let result = {
                token,
                data,
                isEmtpy: false
            }
            res.status(200).send(result)
        }else{
            let result = {
                data,
                isEmtpy: true
            }
            res.status(200).send(result)
        
        }
       
    
    
}

const createItem = async (req, res) => {
    console.log("crear items");
    const body = req.body;
    let {username,email,password} = body

    const nuevoBody = {
        username,
        email,
        typePerfil:"anonimo",
        password:await encryptPassword(password),
      
    }
    try{
        const data = await usermodel.create(nuevoBody)
        console.log("estroy por aquii")
       
   
        res.status(200).send(true)
    }catch(err){
        console.log(err)
        res.status(200).send(false)
    }
    
}   

const updateItem = async (req, res) => {
    const { username, idFilm } = req
    const data = await usermodel.findOneAndUpdate(
        {username: username},
        {$push: {porVer: {nombre: idFilm}}},
        {upsert: true}
    )
    res.send(data)
}
export default {getItems, getItem, createItem, updateItem}
