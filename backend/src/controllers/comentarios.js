import commentmodel from "../models/comentarios.js"

const getItems = async (req, res) => {
    console.log("obtener items");
    const data = await commentmodel.find({});
    res.send(data);
}

const getItem = async (req, res) => {
    console.log("obtener items");
    const film = req.params.film
    const data = await commentmodel.find({id: film});
    res.send(data);
}

const pushItem = async (req, res) => {
    const film = req.params.film
    const { username, comment } = req.body

    const data = await commentmodel.findOneAndUpdate(
        {id : film},
        {$push: {comments: {username, comment}}},
        {upsert:true, new: true}
    )

    res.send(data)
}



export default {getItems, getItem, pushItem}