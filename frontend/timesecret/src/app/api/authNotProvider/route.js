import dbConnect from "@/config/mongodb";
import users from "@/models/users";
import jwt from "jsonwebtoken";
import nextConfig from "../../../../next.config";
dbConnect()
async function GET (request){
    
    const url = await request.url;
    const urlParams = new URL(url).searchParams.toString().split('&')
    const params = urlParams[0].split("=")
    
    const name= params[1].toString()
   
    const resultFInd = await users.find({username:name})
   
    try{
        if(resultFInd.length > 0){
            
            var token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 , 
                email: resultFInd[0].email,
                username: resultFInd[0].username,
            },nextConfig.env.SECRET)
            
            let result = {
                token,
                resultFInd,
                isEmtpy: false
            }
            
           return new Response(JSON.stringify(result))
        }else{
            let result = {
                resultFInd,
                isEmtpy: true
            }
         
            return new Response(JSON.stringify(result))
        
        }
    }catch(err) {
        console.log(err);
        return new Response({})
   }
 
    
}

export { GET };
