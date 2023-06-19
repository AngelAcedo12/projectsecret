"use client"
import { useState } from "react";

export default function Home() {
  let date = new Date();
  const [timeActual={year:date.getFullYear(),mont:date.getMonth(),day:date.getDate(),h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()}, setTime] = useState();
  const [timeFin={year:2024,mont:6,day:14,h:23,m:59,s:59}, setTimeFin] = useState();
  const UpdateTime = () => {

    setTime({year:date.getFullYear(),mont:date.getMonth(),day:date.getDate(),h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()});

  }
  setTimeout(() => {
    UpdateTime();
  }, 100);
  return (
    <>
     
      <section className="flex justify-between flex-col max-h-screen h-full w-full items-center
       content-center" >
        <header className="w-full">
          <nav className="flex flex-row p-3 justify-between">
            <div className="justify-start flex w-full items-center  content-center">
               <h1 className="font-normal text-3xl text-center">TIME</h1>
            </div>


              
              <div className="flex justify-between items-center content-center text-center max-h-full w-full max-w-full">
                <a className="">Instagram</a>
              </div>

          </nav>

        </header>
        <main className=" h-full max-h-screen items-center  w-full flex-col  flex " >
          <div className="h-52 items-center flex justify-center">
            <h1 className=" animate-pulse p-14  " >Proximamente...</h1>
          </div>

            <div className="flex flex-row  h-full w-full  justify-center ">
              <div className="text-center flex-col gap-5 items-center w-full  flex justify-evenly">
                <h1 className="text-4xl p-3">ACTUAL TIME </h1>
                <h1 className="text-3xl w-1/2 py-6">{timeActual.year} - {timeActual.mont} - {timeActual.day}</h1>
                <h1 className="w-1/2 py-6  text-3xl" >{timeActual.h} : {timeActual.m} : {timeActual.s}</h1>
              </div>
              <div className="text-center flex-col gap-5 items-center w-full  flex justify-evenly">
           
                <h1 className="text-4xl p-3 ">? </h1>
                <h1 className="text-3xl w-1/2 py-6">{timeFin.year} - {timeFin.mont} - {timeFin.day}</h1>
                <h1 className="w-1/2 py-6  text-3xl" >{timeFin.h} : {timeFin.m} : {timeFin.s}</h1>
              </div>

            </div>

        </main>

        
       
      
      


      </section>
    </>



  )

}
