"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Megusta from "./botonMegusta";
import LinkToProfile from "./linkToProfile";

export default function Mensaje(params) {
    
    const [username , setUsername] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
            

        if(params.isPublic=="anonimo"){
         
        
            setUsername("Anonimo")
        }
        if(params.isPublic=="public"){
            setUsername(params.username)
        }
    }, [])
    
    return (
        <>
            <div className="   text-xs sm:text-lg   dark:border-white border-black bg-blend-color-burn    px-5 
             transition-all duration-100     py-3 ">
                <div className="w-full  flex-row flex gap-4 items-center py-1"> 
                    <h1 className=" text-xs bg-clip-text text-transparent sm:text-2xl  
                   bg-gradient-to-r from-green-500  via-blue-500 to-purple-600
                    dark:bg-gradient-to-r dark:from-green-300  dark:via-blue-500
                     dark:to-purple-600">{username}</h1>
                    <LinkToProfile isPublic={params.isPublic} username={params.username}></LinkToProfile>
                    <a href={`/Profile/${params.username}`}  id="irPerfil" className="disabled:hidden"></a>
                
            </div>
               
            <div>
                    <p className="break-words text-xs text-[0.6rem] py-2">
                        {params.text}
                    </p>
                </div>
                <div className="flex flex-row items-center h-fit text-center">
                    <Megusta   id={params.id}></Megusta>
                </div>
                <div className="w-full  border-t border-gray-300 mt-2 flex text-center items-center justify-center">
                    <Link className="w-30 px-2 text-xs sm:text-lg py-1 mt-3 transition-all duration-150 border  hover:border-black dark:hover:border-white dark:hover:bg-slate-500 hover:bg-slate-300 rounded-lg"  href={"../"}>Ver Respuestas</Link>
                </div> 
            </div>
        
        </>
    )
  
}
