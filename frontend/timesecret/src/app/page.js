"use client"
import { utilsRegisterUser } from "@/utils/RegisterUser";
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



  const { createUser } = require("@/services/Users");


  
  
  
  return (
    <>
    
    
     <div className="h-full dark:scrollbar-track-black snap-y snap-center snap-mandatory dark:scrollbar-thumb-white  scrollbar-track-white scrollbar-thin overflow-y-auto scrollbar-thumb-black ">
      <header className="w-full relative top-0  ">
            <nav className="flex flex-row  gap-2 justify-between py-3 p-1">
              <div className="justify-start flex w-full items-center  content-center">
                <h1 className="font-normal text-lg sm:text-3xl text-center md:w-1/3 w-full sm:w-1/2
                   py-3 sm:p-3 
                  rounded-lg  transition-all 
                duration-500 cursor-pointer ">TEMPORALSECRETS</h1>
              </div>
                <div className="grid grid-cols-2 sm:flex sm:justify-around text-center animate-fade-left
                items-center content-center    max-h-full w-full max-w-full">
                  <a href="https://www.instagram.com/temporalsecrets/" className="sm:p-3 text-xs sm:text-2xl text-center w-full 
                  sm:w-1/2 rounded-lg sm:hover:w-full sm:dark:hover:bg-slate-600 sm:hover:bg-slate-300  transition-all 
                duration-500 cursor-pointer" >Instagram</a>
                  <a href="https://twitter.com/temporalsecrets" className="sm:p-3 text-xs sm:text-2xl text-center w-full sm:w-1/2 rounded-lg 
                  sm:hover:w-full sm:dark:hover:bg-slate-600 sm:hover:bg-slate-300  transition-all 
                duration-500 cursor-pointer">Twitter</a>
                </div>

            </nav>

          </header>
      <section className="flex justify-between flex-col max-h-screen h-full w-full items-center
       content-center "  >
       
        <main className=" h-full max-h-screen items-center  w-full flex-col px-2 py-3  flex " >
        
            <div className="flex flex-col  h-full w-full   justify-around ">
              <div  className="text-center cursor-default py-5 h-1/2 flex-row   items-center content-center   grid " >
                   <h1 className="text-4xl"> ESTRENO</h1>
              </div>
              <div className="text-center flex-row h-1/2 gap-3 py-4 items-center w-full  flex justify-evenly p-7" >
                <h1 className="md:text-2xl sm:w-1/2 w-1/2 transition-all  duration-500 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600  cursor-pointer
                 p-3 lg:text-3xl text-base  py-6">{timeFin.year} - {timeFin.mont} - {timeFin.day}</h1>
                <h1 className="md:text-2xl  sm:w-1/2 w-1/2 transition-all  duration-500 rounded-lg hover:bg-slate-300  dark:hover:bg-slate-600  cursor-pointer
                 p-3 lg:text-3xl text-base  py-6" >{timeFin.h} : {timeFin.m} : {timeFin.s}</h1>
              </div>
            </div> 
        </main>
        
      </section>
      <section className="flex justify-around flex-col max-h-screen h-full w-full items-center
       content-center ">
          <main className="py-5 h-full max-h-screen items-center  w-full flex-col px-2   flex ">
              <div className=" h-20 text-center flex justify-center">
                <h1 className="text-2xl sm:text-3xl flex text-center items-center content-center">Registrarse</h1>
              </div>
              <form onSubmitCapture={utilsRegisterUser}  className="h-full flex flex-col justify-center gap-5 text-xs w-fit sm:text-2xl sm:w-1/2 px-3" >
                Usuario<input id="usernameInput" required={true} minLength={6} className="bg-transparent  placeholder:text-gray-300 border-b-2 border-separate border-spacing-1 
                 dark:text-white py-1 text-black transition-all duration-500 outline-none"  type="text" placeholder="Nombre de usuario "></input>
                Email<input id="emailInput" required={true} minLength={6}  className="bg-transparent placeholder:text-gray-300 border-b-2 border-separate border-spacing-1 
                 dark:text-white py-1 text-black  transition-all duration-500 outline-none"  type="email" placeholder="Introduzca tu email"></input>
                Contraseña<input id="passwordInput" required={true} minLength={6}  className="bg-transparent placeholder:text-gray-300  border-b-2 border-separate border-spacing-1
                 dark:text-white py-1 text-black  transition-all duration-500 outline-none" autoComplete="none" type="password" placeholder="Introduce la contraseña"></input>
                  <input  value={"Resgistrarse"} className="p-4 dark:hover:bg-slate-600 rounded-lg cursor-pointer   transition-all duration-500" type="submit"></input>
              </form>
          </main>
      </section>
  
      </div>
     
      <Analytics mode='auto'></Analytics>
    </>



  )

}
