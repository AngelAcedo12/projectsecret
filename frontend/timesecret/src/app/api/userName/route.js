import dbConnect from "@/config/mongodb";
import users from "@/models/users";

dbConnect()
async function GET (request){

    const url = await request.url;
    const urlParams = new URL(url).searchParams.toString()
    const params = urlParams.split("=");
    const name= params[1].toString()
    const resultFInd = await users.find({username:name})
    return new Response(resultFInd)

}



export { GET };
