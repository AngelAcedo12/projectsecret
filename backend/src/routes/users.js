import express from "express";
import userController from "../controllers/users.js";

const routeuser = express.Router()
routeuser.get('/:user', userController.getItem)
routeuser.get('/', userController.getItems)
routeuser.post('/', userController.createItem)
routeuser.post('/update', userController.updateItem)


export default routeuser;