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
    
    <header className="w-full  top-0  ">
            <nav className="flex flex-row  gap-1 justify-between py-3 p-1">
              <div className="justify-start flex w-full items-center  content-center">
                <h1 className="font-normal text-base sm:text-2xl w-full 
              
                   py-3 sm:p-3 
                  rounded-lg  transition-all 
                duration-500 cursor-pointer animate-fade ">TEMPORALSECRETS</h1>
              </div>

              
                <div className="grid grid-cols-2 sm:flex sm:justify-around text-center animate-fade-left
                items-center content-center    max-h-full w-full max-w-full">
                  <a href="https://www.instagram.com/temporalsecrets/" className="sm:p-3 text-xs sm:text-2xl text-center w-full 
                  sm:w-1/2 rounded-lg sm:hover:w-full sm:dark:hover:bg-slate-600 sm:hover:bg-slate-300  transition-all 
                duration-300 cursor-pointer" >Instagram</a>
                  <a href="https://twitter.com/temporalsecrets" className="sm:p-3 text-xs sm:text-2xl text-center w-full 
                  sm:w-1/2 rounded-lg sm:hover:w-full sm:dark:hover:bg-slate-600 sm:hover:bg-slate-300  transition-all 
                duration-300 cursor-pointer">Twitter</a>
                </div>
            </nav>
          </header>
   
      
      <section className="flex justify-between snap-end flex-col  max-h-screen h-full w-full items-center
       content-center "  >
       
        <main className=" h-full  items-center  animate-fade  w-full flex-col  content-center justify-evenly flex " >
        
            <div className="flex flex-col  h-1/2 w-full   justify-center ">
                     
            <div className="h-full flex   flex-col items-center justify-start w-full gap-3 transition-all  hover ">
                <h1 className="w-full text-center text-4xl animate-fade "  >¿  ?</h1>
                <p className="w-1/2 text-center animate-fade " >Tu tienes el control y tu decides que hacer con tus datos.
La red social anonima y temporal. </p>
            </div>
              <div className="text-center flex-col h-full py-4 items-center w-full gap-4 flex justify-center p-7 animate-fade  " >
                
                 <h2 className="h-1/2   ">¡Registrate pulsado el boton de abajoo!</h2>
                 <a className=" text-lg  text-center items-center content-center border  animate-fade  border-black  dark:border-white
                  flex p-4 px-7 dark:hover:bg-slate-600 hover:bg-slate-300 rounded-lg transition-all  duration-300"
                   href="./SigIn">Registrarse</a>
                  <h3>Te avisaremos por correo para que seas el primero en probarla.</h3>
              </div>
            </div> 
        

        </main>

      </section>
    
   
     
      <Analytics mode='auto'></Analytics>
    </>



  )

}
