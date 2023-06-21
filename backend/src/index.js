import cors from "cors";
import "dotenv/config.js";
import express from "express";
import dbConnect from "./config/mongodb.js";
import routeuser from "./routes/users.js";



const app = express();

app.use(cors());
app.use(express.json())
const port = process.env.PORT || 8001;

app.use('/api/users', routeuser)


app.listen(port, () => {
    console.log(`listening at https://temporalsecretbackend.onrender.com`)
})

await dbConnect()
console.log("Conectado a base de datos")
