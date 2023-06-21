"use client"
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import './globals.css';

export default function Home() {
  let date = new Date();
  const [timeActual={year:null,mont:null,day:null,h:null,m:null,s:null}, setTime] = useState();
  const [timeFin={year:2024,mont:"06",day:"0",h:"00",m:"00",s:"00"}, setTimeFin] = useState();
  const UpdateTime = () => {
    var ha = date.getHours()
    var ma = date.getMinutes()
    var sa = date.getSeconds()
    var da = date.getDate();
    ma= date.getMinutes()
    ha=ha<10 ? "0"+ha:ha
    ma=ma<10 ? "0"+ma:ma
    sa=sa<10 ? "0"+sa:sa
    da=da<10 ? "0"+da:da
    setTime({year:date.getFullYear(),mont:"0"+(date.getMonth()+1).toString(),day:da,h:ha,m:ma,s:sa});

  }
  setTimeout(() => {
    UpdateTime();
  }, 150);





  
  
  
  return (
    <>
    
    
     <div className="h-full dark:scrollbar-track-black snap-y snap-center snap-mandatory dark:scrollbar-thumb-white  scrollbar-track-white scrollbar-thin overflow-y scrollbar-thumb-black ">
      <header className="w-full relative top-0  ">
            <nav className="flex flex-row  gap-2 justify-between py-3 p-1">
              <div className="justify-start flex w-full items-center  content-center">
                <h1 className="font-normal text-lg sm:text-3xl text-center md:w-1/3 w-full sm:w-1/2
                   py-3 sm:p-3 
                  rounded-lg  transition-all 
                duration-500 cursor-pointer animate-fade ">TEMPORALSECRETS</h1>
              </div>
                <div className="grid grid-cols-2 sm:flex sm:justify-around text-center animate-fade-left
                items-center content-center    max-h-full w-full max-w-full">
                  <a href="https://www.instagram.com/temporalsecrets/" className="sm:p-3 text-xs sm:text-2xl text-center w-full 
                  sm:w-1/2 rounded-lg sm:hover:w-full sm:dark:hover:bg-slate-600 sm:hover:bg-slate-300  transition-all 
                duration-300 cursor-pointer" >Instagram</a>
                  <a href="https://twitter.com/temporalsecrets" className="sm:p-3  sm:text-2xl text-center w-full sm:w-1/2 rounded-lg 
                  sm:hover:w-full sm:dark:hover:bg-slate-600 sm:hover:bg-slate-300  transition-all 
                duration-300 cursor-pointer ">Twitter</a>
                </div>

            </nav>

          </header>
      <section className="flex justify-between flex-col max-h-screen h-full w-full items-center
       content-center "  >
       
        <main className=" h-full max-h-screen items-center  animate-fade  w-full flex-col px-2 py-3 content-center justify-center flex " >
        
            <div className="flex flex-col  h-1/2 w-full   justify-center ">
              <div  className="text-center cursor-default py-2 h-1/2 flex-row     items-center content-center   grid grid-flow-row " >
                 
                   <h1 className="text-3xl sm:w-full w-full transition-all  duration-300 rounded-lg 
                 p-3   py-6">Proximamente..</h1>
              </div>
              <div className="text-center flex-col h-full py-4 items-center w-full gap-5 flex justify-center p-7 " >
                
                 <h2 className="h-1/2">¡Registrate pulsado el boton de abajoo!</h2>
                 <a className=" text-lg  text-center items-center content-center
                  flex p-4 px-20 dark:hover:bg-slate-600 hover:bg-slate-300 rounded-lg transition-all  duration-300"
                   href="./SigIn">Registrase</a>

              </div>
            </div> 
       

        </main>

      </section>
 
  
      </div>
     
      <Analytics mode='auto'></Analytics>
    </>



  )

}
