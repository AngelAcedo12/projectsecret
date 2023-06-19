"use client"
import { useState } from "react";

export default function Home() {
  let date = new Date();
  const [timeActual={year:date.getFullYear(),mont:date.getMonth(),day:date.getDate(),h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()}, setTime] = useState();
  const [timeFin={year:2024,mont:6,day:14,h:23,m:59,s:59}, setTimeFin] = useState();
  const UpdateTime = () => {
    var ha = date.getHours()
    var ma = date.getMinutes()
    var sa = date.getSeconds()
    ma= date.getMinutes()
 
    ha=ha<10 ? "0"+ha:ha
    ma=ma<10 ? "0"+ma:ma
    sa=sa<10 ? "0"+sa:sa
    setTime({year:date.getFullYear(),mont:date.getMonth(),day:date.getDate(),h:ha,m:ma,s:sa});

  }
  setTimeout(() => {
    UpdateTime();
  }, 100);
  return (
    <>
     
      <section className="flex justify-between flex-col max-h-screen h-full w-full items-center
       content-center" >
        <header className="w-full">
          <nav className="flex flex-row p-3 gap-2 justify-between">
            <div className="justify-start flex w-full items-center  content-center">
               <h1 className="font-normal text-lg sm:text-3xl text-center md:w-1/3 w-full sm:w-1/2 sm:hover:w-full
                sm:hover:bg-slate-600 py-3 sm:p-3 
                 rounded-lg  transition-all 
               duration-500 cursor-pointer ">TEMPORALSECRETS</h1>
            </div>
              <div className="grid grid-cols-2 sm:flex sm:justify-around text-center animate-fade-left
               items-center content-center    max-h-full w-full max-w-full">
                <a className="sm:p-3 text-sm sm:text-2xl text-center w-full sm:w-1/2 rounded-lg sm:hover:w-full sm:hover:bg-slate-600 transition-all 
               duration-500 cursor-pointer" >Instagram</a>
                <a href="" className="sm:p-3 text-sm sm:text-2xl text-center w-full sm:w-1/2 rounded-lg sm:hover:w-full sm:hover:bg-slate-600 transition-all 
               duration-500 cursor-pointer">Twitter</a>
              </div>
          </nav>

        </header>
        <main className=" h-full max-h-screen items-center sm:p-5 w-full flex-col px-2 pb-4 flex " >
          <div className="h-48 items-center flex justify-center">
            <h1 className=" animate-pulse p-14  " >Proximamente...</h1>
          </div>

            <div className="flex flex-row  h-full w-full  justify-center ">
              <div className="text-center flex-col gap-3 items-center w-full  flex justify-evenly">

                <h1 className="md:text-2xl sm:w-1/2 w-full  transition-all  duration-500 rounded-lg
                 hover:bg-slate-600  cursor-pointer
                  p-3 lg:text-3xl text-lg  py-6">{timeActual.year} - {timeActual.mont} - {timeActual.day}</h1>
                <h1 className="md:text-2xl sm:w-1/2 w-full transition-all  duration-500 rounded-lg
                 hover:bg-slate-600  cursor-pointer
                  p-3 lg:text-3xl text-lg py-6" >{timeActual.h} : {timeActual.m} : {timeActual.s}</h1>
              </div>
              <span className="h-full w-1 mx-2 bg-white"></span>
              <div className="text-center flex-col gap-3 items-center w-full  flex justify-evenly" >
                <h1 className="md:text-2xl sm:w-1/2  w-full transition-all  duration-500 rounded-lg hover:bg-slate-600  cursor-pointer
                 p-3 lg:text-3xl text-lg  py-6">{timeFin.year} - {timeFin.mont} - {timeFin.day}</h1>
                <h1 className="md:text-2xl  sm:w-1/2 w-full transition-all  duration-500 rounded-lg hover:bg-slate-600  cursor-pointer
                 p-3 lg:text-3xl text-lg py-6" >{timeFin.h} : {timeFin.m} : {timeFin.s}</h1>
              </div>

            </div>

        </main>

        
       
      
      


      </section>
    </>



  )

}
