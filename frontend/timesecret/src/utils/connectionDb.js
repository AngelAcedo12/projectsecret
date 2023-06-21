import { connect, connection } from "mongoose";

const conn = {
    isConnected: false,
}

export default async function dbConect(){
    if (conn.isConnected==false){
        const db = await connect(process.env.DB_URI
            );
        conn.isConnected= true;
        console.log("Conesion realizada") 
    }
    
   

}


connection.on("error", (err) => {
    console.log(err);
} )

