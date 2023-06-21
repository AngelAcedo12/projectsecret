import usermodel from "../models/users.js";

const getItems = async (req, res) => {
    console.log("obtener items");
    const data = await usermodel.find({});
    res.send(data)
}
const getItem = async (req, res) => {
    console.log("obtener 1 item");
    const user = req.params.user
    const data = await usermodel.find({username:user})
    res.status(200).send(data)
}

const createItem = async (req, res) => {
    console.log("crear items");
    try{
        const body = req.body
        const data = await usermodel.create(body)
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
