import { useEffect, useState } from "react";
import MeGustaAplicate from "./meGustaAplicate";
import MeGustaNoAplicate from "./meGustaNoAplicate";
export default function Megusta(){
    const [meGusta, setGusta] = useState(false)
    const [tipMeguta, setTipo] = useState(<MeGustaNoAplicate></MeGustaNoAplicate>);

        const click = function(){
            setGusta(meGusta ? false : true)
           
        }
        useEffect(() => {
        if(!meGusta){
            setTipo(<MeGustaNoAplicate ></MeGustaNoAplicate>)
        }else{
            setTipo(<MeGustaAplicate></MeGustaAplicate>)
        }
        
      
    }, [meGusta])
    return (
        
        <div className="flex gap-3 p-1 py-1">
            <h1 className=" text-center items-center align-middle flex">88</h1>
            <button className="hover:bg-slate-300 dark:hover:bg-slate-500 py-2 px-2 rounded-full transition-all duration-150" onClick={click}>{
                tipMeguta
              }</button>
              
        </div>

    )

}