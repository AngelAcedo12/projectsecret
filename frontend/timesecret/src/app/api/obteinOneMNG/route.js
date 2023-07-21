import dbConnect from "@/config/mongodb";
import mesajes from "@/models/mesajes";
dbConnect()
async function GET(request){

    const url = await request.url;
    const urlParams = new URL(url).searchParams.toString()
    const params = urlParams.split("=");
    const idM= Number(params[1].toString())    
    try{
        const data=await mesajes.find({id:idM})
       
        return new Response(JSON.stringify(data))
    }catch(err){
        console.log(err);
        return new Response(JSON.stringify([]))
    }
}

export { GET };

