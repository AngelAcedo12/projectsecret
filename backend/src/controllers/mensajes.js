import mesajes from "../models/mesajes.js";

const getItems = async (req, res) => {
    console.log("obtener items");
    const data = await mesajes.find({});
    res.send(data);
}

const getItem = async (req, res) => {
    console.log("obtener items");
    const user = req.params.username
    const data = await mesajes.find({username:user});
    res.send(data);
}

const createItem = async (req, res) => {
    
}



export default {getItems, getItem, createItem}