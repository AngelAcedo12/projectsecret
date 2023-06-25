"use client"
import ExplorarTop from "@/app/component/explorarMenuArriba.";
import Mensaje from "@/app/component/mensaje";
import MenuInferior from "@/app/component/menuInferion";
import { useState } from "react";

export default function Profiler({params}){
    console.log(params)
    const [AreYouTePerson, setAreYouTePerson] = useState(true);
    return (
        <>
       <header className="w-full   top-0  ">
            <nav className="flex flex-row  gap-2 justify-between py-1 p-1">
              <div className="justify-start flex w-full items-center  content-center">
                <h1 className="font-normal  text-base sm:text-3xl text-start  w-full 
                   py-2 sm:p-3 
                  rounded-lg  transition-all 
                duration-500  animate-fade ">TEMPORALSECRETS</h1>
              </div>
              <div className="w-1/2">
                <ExplorarTop></ExplorarTop>

              </div>
          
            </nav>
          </header>
          
        <section className="flex flex-col overflow-y-auto scrollbar-thin dark:scrollbar-track-black dark:scrollbar-thumb-white h-full w-full pb-8 z-0
                       " > 
            
                

                        <div className="w-full justify-around flex-col gap-3 flex h-full py-3 ">
                          <div className="flex h-full flex-col w-full gap-3 justify-between text-center  text-sm">
                            <h1 className="text-lg" >{params.username}</h1>
                              <div className="w-full h-max flex flex-col justify-center items-center text-center">
                            
                                </div>
                              <div className="w-full  flex flex-col items-center justify-center text-centerx"  >
                                <h2 className="w-full items-center content-center text-center 
                                flex-col gap-2 flex justify-around">Me gustas</h2>
                                <h2>23</h2>
                              </div>
                          </div>
                        
                          <div className="p-2 text-sm flex flex-col gap-2 ">
                            <div className="text-sm">
                              <h1>Tipo de perfil:  </h1>
                            </div>
                            <h1>Biografia</h1>
                             <p> "Explorando el mundo con pasión y creatividad. Compartiendo momentos únicos a través de la 
                              lente. Vive, sueña, fotografía. 📷✨"</p>
                          </div>
                        </div>

                        <div className="   h-full">
                        <div className="w-full  pb-5 flex   flex-col border-t border-white ">
                          <button>Mensajes</button>
                          <div className="  w-full flex flex-col  
                            ">
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                            <Mensaje></Mensaje>
                          </div>
                          </div>        
                        </div>
                          
                         

                         
            
              
        </section>
        <div className="bg-black mt-4 fixed  bottom-0 sm:hidden   w-full">
                      <MenuInferior></MenuInferior>
              
        </div> 
        </>
    )



}