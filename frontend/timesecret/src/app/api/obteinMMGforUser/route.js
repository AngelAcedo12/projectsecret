import dbConnect from "@/config/mongodb";
import mesajes from "@/models/mesajes";
dbConnect()
async function GET(request){

    const url = await request.url;
    
    const urlParams = new URL(url).searchParams.toString().split("&")
  
    const params = urlParams[0].split("=");
    const user= params[1].toString()
  
    try{
        const data=await mesajes.find({username:user})
        return new Response(JSON.stringify(data))
    }catch(err){
        console.log(err);
        return new Response(JSON.stringify([]))
    }
}

export { GET };

