"use client"
import ExplorarTop from "@/app/component/explorarMenuArriba.";
import Mensaje from "@/app/component/mensaje";
import MenuInferior from "@/app/component/menuInferion";
import MenuLater from "@/app/component/menuLater";
import { dataForUser } from "@/utils/UtilsProfile";
import { getCookie } from "cookies-next";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default  function Profiler({ params }) { 
  const token = getCookie("rt-user-login")
  
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isEmtpy, setIsEmtpy] = useState(false);
  const rooter = useRouter()
  useEffect(() => {
    
    let user=null;
    
    try{
     user= jwt_decode(token)
     setData(dataForUser(user.username).then(res => {
    
      if (res.isEmtpy) {
        
        setIsEmtpy(true);
      }else{
        setIsEmtpy(false)
        setData(res.resultFInd[0])
      
      }
      setLoading(true)
      return res
    }))
    }catch{
      rooter.push("./LogIN")
    }
    
   


  }, [])

  if (loading == false) {

    return (
      <div className="h-full w-full flex items-center  justify-center">
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
            <nav className="flex flex-row  gap-2 justify-between border-b border-black py-1 p-1">
              <div className="justify-start flex w-full items-center  content-center">
                <h1 className="font-normal  text-base sm:text-3xl text-start  w-full  py-2 sm:p-3 rounded-lg  transition-all  duration-500  animate-fade">TEMPORALSECRETS</h1>
              </div>

              <ExplorarTop></ExplorarTop>

            </nav>
          </header>

          <section className="flex flex-col  sm:flex-row md:flex-row lg:flex-row   h-full w-full pb-8 " >
            <MenuLater></MenuLater>
            <div className="  w-full h-full  overflow-y-auto z-100 scrollbar-w-0.5   scrollbar scrollbar-track-white dark:scrollbar-track-white dark:scrollbar-track-rounded-sm dark:scrollbar-thumb-gray-700
            scrollbar-thumb-rounded-full   scrollbar-rounded  flex gap-2 flex-col   
             ">
              <div className="w-full sticky top-0  border-b  py-5 text-white text  bg-white dark:bg-black  border-black
               dark:border-white rounded-lg   justify-normal flex-col  flex  ">
                <div className="flex  flex-col w-full  justify-normal  text-center px-2 text-sm">
                  <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" >{data.username}</h1>
                  
                 
                </div>
              
              </div>
              <div>
                <div className=" w-full  ">
                  <div className="w-full  flex  flex-col   ">
                    <h1 className="text-center py-3 ">Mensajes</h1>
                    <ul className=" w-full   py-2 flex flex-col  mr-1 mb-10 md:mb-10">
                      <Mensaje></Mensaje>
                      <Mensaje></Mensaje>
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
