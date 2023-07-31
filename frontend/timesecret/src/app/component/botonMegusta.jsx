import { incrementLike, obteinOneMessage, removeLike } from "@/services/Mensajes";
import { getCookie } from "cookies-next";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import MeGustaAplicate from "./meGustaAplicate";
import MeGustaNoAplicate from "./meGustaNoAplicate";
export default function Megusta(params){
    const [meGusta, setGusta] = useState(params.userLike)
    const [tipMeguta, setTipo] = useState();
    const [likes, setLikes] = useState()
    const click = async function(){
        document.getElementById("btnMegusta").disable=true;
            try{
                const token = getCookie("rt-user-login")
                const user= jwt_decode(token)
              
                if(meGusta==false && likes<=0){
                    if(await incrementLike(params.id,user.username)){
                        
                        obteinOneMessage(params.id).then(res => setLikes(res[0].likes))
                        setGusta(true)
                        document.getElementById("btnMegusta").disable=false;
                    }
                }else{
                    
                    if(await removeLike(params.id,user.username) && likes>=0){
                        obteinOneMessage(params.id).then(res => setLikes(res[0].likes))
                        setGusta(false)
                        document.getElementById("btnMegusta").disable=false;
                       
                    }
                   
                }
           
            }catch(err){
                console.log(err);
             
            }
           
           
        }
        
        useEffect(() => {
        
            obteinOneMessage(params.id).then(res => setLikes(res[0].likes))
        if(!meGusta){
            setTipo(<MeGustaNoAplicate></MeGustaNoAplicate>)
        }else{
            setTipo(<MeGustaAplicate></MeGustaAplicate>)
        }
        
      
    }, [meGusta])
    return (
        
        <div className="flex flex-row gap-3 p-1 py-1">
            <h1 className="    py-2 px-2 w-5 text-center items-center align-middle flex">{likes}</h1>
            <button id="btnMegusta" className=" w-full  py-2 px-2 rounded-full transition-all duration-150" onClick={click}>{
                tipMeguta
              }</button>
              
        </div>

    )

}