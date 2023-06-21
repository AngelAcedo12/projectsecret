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
    res.send(data)
}

const createItem = async (req, res) => {
    console.log("crear items");
    const body = req.body
    const data = await usermodel.create(body)
    //const body = req.body; desestructuracion
    res.send({data})
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
