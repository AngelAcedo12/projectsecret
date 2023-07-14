"use client"
import ExplorarTop from "@/app/component/explorarMenuArriba.";
import Mensaje from "@/app/component/mensaje";
import MenuInferior from "@/app/component/menuInferion";
import MenuLater from "@/app/component/menuLater";
import { dataForUser } from "@/utils/UtilsProfile";
import { useEffect, useState } from "react";


export default function Profiler({ params }) {

  
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isEmtpy, setIsEmtpy] = useState(false);

  useEffect(() => {
    setData(dataForUser(params.username).then(res => {

      if (res.isEmtpy) {
        setIsEmtpy(true);

      }
      setLoading(true)
      return res
    }))


  }, [])

  if (loading == false) {

    return (
      <div className="h-full w-full flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute  !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
          >
        </div>
      </div>
    )






  } else {
    if (isEmtpy) {
      return (<h1>Usuario no encontrado</h1>)
    } else {



      return (
        <>
          <header className="w-full   top-0  ">
            <nav className="flex flex-row  gap-2 justify-between py-1 p-1">
              <div className="justify-start flex w-full items-center  content-center">
                <h1 className="font-normal  text-base sm:text-3xl text-start  w-full  py-2 sm:p-3 rounded-lg  transition-all  duration-500  animate-fade">TEMPORALSECRETS</h1>
              </div>

              <ExplorarTop></ExplorarTop>

            </nav>
          </header>

          <section className="flex flex-col sm:flex-row md:flex-row lg:flex-row  h-full w-full pb-8 z-0" >
            <MenuLater></MenuLater>
            <div className="overflow-y-auto  w-full h-full scrollbar-thin flex gap-2 flex-col pl-1.5 dark:scrollbar-track-black
             scrollbar-thumb-black dark:scrollbar-thumb-white">
              <div className="w-full sticky top-0 dark:bg-black bg-white backdrop-brightness-50 backdrop-blur-3xl border-black
               dark:border-white  border-b justify-normal flex-col  flex  ">
                <div className="flex  flex-col w-full  justify-normal text-center  text-sm">
                  <h1 className="text-2xl" >{params.username}</h1>
                  <div className="w-full h-max flex flex-col justify-center items-center text-center">

                  </div>
                  <div className="w-full  flex flex-col items-center justify-center text-centerx"  >
                    <h2 className="w-full text-xs sm:text-lg  items-center content-center text-center flex-col gap-2 flex justify-around">Me gustas totales</h2>
                    <h2 className="text-xs sm:text-lg">23</h2>
                  </div>
                </div>
                <div className="p-2 text-xs sm:text-lg flex flex-col gap-2 ">
                  <div className="text-sm">
                    <h1>Tipo de perfil: Publico  </h1>
                  </div>

                </div>
              </div>
              <div>
                <div className="">
                  <div className="w-full  pb-2 flex  flex-col   ">
                    <h1 className="text-center py-3 ">Mensajes</h1>
                    <ul className=" w-full max-h-full py-2 flex flex-col pl-1 gap-1 mb-10 md:mb-10">
                      <Mensaje></Mensaje>
                      <Mensaje></Mensaje>
                      <Mensaje></Mensaje>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0  sm:hidden   w-full">
              <MenuInferior></MenuInferior>
            </div>
          </section>

        </>
      )


    }
  }
}
