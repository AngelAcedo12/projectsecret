
import dbConnect from "@/config/mongodb";
import mesajes from "@/models/mesajes";

dbConnect()
async function GET(){
    try{
        const data = await mesajes.find()
        return new Response(JSON.stringify(data))
    }catch(err){
        console.log(err);
        return new Response(JSON.stringify([]))
    }
 

    

}
async function POST(request){
    try{
        const numeroMensajes = (await mesajes.find()).length +1 
        const body = await request.json() 
        const newBody = {
            id:numeroMensajes,
            username:body.username,
            Text:body.Text,
            isPublic:body.isPublic,
            parametros:body,
        }
        await mesajes.create(newBody)
        return new Response(JSON.stringify(true))
    }catch(err){
        console.log(err);
        return new Response(JSON.stringify(false))
    }
}



export { GET, POST };

