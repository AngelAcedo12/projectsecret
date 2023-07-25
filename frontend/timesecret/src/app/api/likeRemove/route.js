import dbConnect from "@/config/mongodb";
import mesajes from "@/models/mesajes";
import users from "@/models/users";
dbConnect()
async function PUT(request){
    try{
    const url = await request.url;
    console.log(url);
    const urlParams = new URL(url).searchParams.toString().split("&")
    const idM= Number((urlParams[0].split("="))[1])
    const username= (urlParams[1].split("="))[1]
    const data = await mesajes.find({id:idM})
    const likes = Number(data[0].likes)-1
    console.log(likes);
    await mesajes.findOneAndUpdate(
        {id:idM},
        {likes:likes}
    )
    await users.findOneAndUpdate(
        {username:username},
        {$pull:{MngLikes:{id:idM}}}
    )
    return new Response(JSON.stringify(true))
    }catch(err){
        console.log(err);
        return new Response(JSON.stringify(false))
    }    
}

export { PUT };

