import express from "express";
import mensajesControler from "../controllers/mensajes.js";

const routeuser = express.Router()
routeuser.get('/:user', mensajesControler.getItem)
routeuser.get('/', mensajesControler.getItems)
routeuser.post('/', mensajesControler.createItem)



export default routeuser;