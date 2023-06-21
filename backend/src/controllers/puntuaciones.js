import punctuationmodel from "../models/puntuaciones.js"

const getItems = async (req,res) => {
    const data = await punctuationmodel.find({});
    res.send(data)
}

const pushItem = async (req,res) => {
    const {idFilm , nota} = req.body
    console.log(nota, idFilm)
    const user = req.params.user
    const data = await punctuationmodel.findOneAndUpdate(
        {username: user},
        {$push:{puntuations: {film: idFilm, puntuation:nota}}},
        {upsert: true, new: true}
    )
    res.send(data)
}

const getItem = async (req,res) => {
    const user = req.params.user
    const data = await punctuationmodel.find({username: user})
    
}

export default {getItems, pushItem}