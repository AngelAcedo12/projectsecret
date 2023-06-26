import { useEffect, useState } from "react";
import MeGustaAplicate from "./meGustaAplicate";
import MeGustaNoAplicate from "./meGustaNoAplicate";
export default function Megusta(){
    const [meGusta, setGusta] = useState(false)
    const [tipMeguta, setTipo] = useState(<MeGustaNoAplicate></MeGustaNoAplicate>);

        const click = function(){
            setGusta(meGusta ? false : true)
            console.log(meGusta)
        }
        useEffect(() => {
        if(!meGusta){
            setTipo(<MeGustaNoAplicate ></MeGustaNoAplicate>)
        }else{
            setTipo(<MeGustaAplicate></MeGustaAplicate>)
        }
    
      
    }, [meGusta])
    return (

        <div className="flex gap-3 p-1">
            <h1>88</h1>
            <button onClick={click}>{
                tipMeguta
              }</button>
              
        </div>

    )

}