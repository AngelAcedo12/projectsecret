import dbConnect from "@/config/mongodb";
import mesajes from "@/models/mesajes";
dbConnect()
async function PUT(request){
    try{
            
    const url = await request.url;
    const urlParams = new URL(url).searchParams.toString()
    const params = urlParams.split("=");
    const idM= Number(params[1].toString())    
    const data = await mesajes.find({id:idM})
    const likes = Number(data[0].likes)-1
    console.log(likes);
    await mesajes.findOneAndUpdate(
        {id:idM},
        {likes:likes}
    )
    return new Response(JSON.stringify(true))
    }catch(err){
        console.log(err);

    }    
}

export { PUT };

