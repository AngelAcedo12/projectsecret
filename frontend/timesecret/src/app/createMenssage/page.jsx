"use client"
import { useEffect, useState } from "react";

export default function Page() {

  let user=null;
  const [tipoMensaje, setTipo] = useState(true)
  const [characters, setNumbercharacters] = useState(0)
 
  useEffect(() => {
    if(tipoMensaje==true){
      document.getElementById("btnAnonimo").classList.add("bg-slate-500")
      document.getElementById("btnPublico").classList.remove("bg-slate-500")
      document.getElementById("tipeMN").innerHTML="Anónimo"
      
    }
    if(tipoMensaje==false){
      document.getElementById("btnAnonimo").classList.remove("bg-slate-500")
      document.getElementById("btnPublico").classList.add("bg-slate-500")
      document.getElementById("tipeMN").innerHTML="Público"
    }   
  }, [tipoMensaje])
  
 const verifyLength= ()=>{
      setNumbercharacters((((document.getElementById("text").value).toString().length)/500)*100)
    if((document.getElementById("text").value).toString().length>20){
      document.getElementById("btmSubmit").disabled=false;
     
    }else{
      document.getElementById("btmSubmit").disabled=true;
    }
  
 }
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <div className="p-2 h-full">
        <div className="h-full w-full flex flex-col p-3 dark:bg-gradient-to-b dark:bg-black  border  dark:border-gray-600 rounded-lg ">
          <div className="flex flex-col  justify-around" >
            <div className="flex flex-row  gap-3">
            <h1  className="py-2 sm:text-xl text-base font-bold justify-start ">Tipo de mensaje:   </h1>
            <h1 id="tipeMN" className="py-2  sm:text-xl text-transparent bg-clip-text font-bold text-base
             bg-gradient-to-r  dark:from-green-200 from-green-700 dark:via-green-300   via-green-500 to-blue-500 dark:to-blue-500 "> </h1>
            </div>
            <span className="w-1/6 justify-end bg-black h-0.5 dark:bg-white"> </span>
            <div className="gap-2 flex w-full py-3 flex-row justify-around">
              <button onClick={() => {setTipo(true)}} id="btnAnonimo" className="border focus:bg-slate-500 hover:bg-slate-500 border-black w-full transition-colors duration-150
               dark:border-white  py-2 sm:py-4 px-6  rounded-lg">Anonimo</button>
              <button onClick={() => {setTipo(false)}} id="btnPublico" className="border border-black  focus:bg-slate-500 hover:bg-slate-500 w-full transition-colors duration-150
               dark:border-white py-2 sm:py-4 px-6 rounded-lg">Publico</button>
            </div>
          </div>
          <textarea id="text" onChange={verifyLength}  minLength={20} maxLength={500} className="h-full text-xs sm:text-base  border resize-none border-transparent focus:outline-none hover:dark:border-white  focus:border-black
           hover:border-black focus:dark:border-white  rounded-lg bg-transparent   p-2" >
          
           </textarea>

           <div className="pt-4  w-full "> 
              <div class="w-20  rounded-full bg-gray-200    mb-4 bg-transparent">
                  <div class="h-1 rounded-full  bg-gradient-to-l from-sky-400 to-cyan-300 " style={{width: characters+"%"}}></div>
              </div>
           </div> 
          
           <h6  className="text-[0.8em] px-2 py-4 text-red-500">Los mensajes PÚBLICOS seran visibles para todo el mundo</h6>
          <div className="flex flex-row justify-around  gap-3  h-fit">
            <button className="border  py-2 sm:py-4 px-6 focus:bg-slate-500 hover:bg-slate-500 rounded-lg border-black w-full transition-colors duration-150
               dark:border-white ">Cancelar</button> 
            <button id="btmSubmit" disabled={true} className="border rounded-lg disabled:border-transparent hover:bg-slate-500  focus:bg-slate-500  py-2 sm:py-4 px-6  border-black w-full transition-colors duration-150
               dark:border-white ">Enviar</button>
          </div>
        </div>


      </div>

    </div>
  )
}
