"use client"
import { obteinAllMessage } from "@/services/Mensajes"
import { getCookie } from "cookies-next"
import jwt_decode from "jwt-decode"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Loader from "../component/loader"
import Mensaje from "../component/mensaje"
import MenuLater from "../component/menuLater"
import MenuTOP from "../component/menuTOP"

export default function page() {
  const router = useRouter()
    const [data , setData ] = useState([])
    const [loading , setLoading] = useState(false)
    let user=null;
    const token = getCookie("rt-user-login")
    useEffect(() => {
      try{
        user= jwt_decode(token)
      }catch(err){
        router.push("./LogIN")
      }
       
        obteinAllMessage().then(res => {setData(res), setLoading(true)}).
        catch(err => {setData([]); setLoading(true)})
    
      }, [])
      
      if(loading==false){
        return (                <>
          <MenuTOP></MenuTOP>
          <section className="flex flex-row  sm:flex-row md:flex-row lg:flex-row   h-full w-full pb-8 " >
          <MenuLater></MenuLater>
          <div className="  w-full h-full  overflow-y-auto z-100 scrollbar-w-0.5   scrollbar scrollbar-track-white dark:scrollbar-track-white dark:scrollbar-track-rounded-sm dark:scrollbar-thumb-gray-700
          scrollbar-thumb-rounded-full   scrollbar-rounded  flex gap-2 flex-col   
          ">
 
   
      
        <div className="w-full  justify-center items-center  h-full  flex  flex-col   ">
         
         
            <Loader></Loader>
        
        
      
      
    </div>
  </div>
 
</section>




      </>)
      }
      if(loading==true){
        if(data.length==0){
            return ( 
                <>
                  <MenuTOP></MenuTOP>
                  <section className="flex flex-row     h-full w-full pb-8 " >
            <MenuLater></MenuLater>
            <div className="  w-full h-full  overflow-y-auto z-100 scrollbar-w-0.5   
            scrollbar scrollbar-track-white dark:scrollbar-track-white
             dark:scrollbar-track-rounded-sm dark:scrollbar-thumb-gray-700
            scrollbar-thumb-rounded-full   scrollbar-rounded  flex gap-2 flex-col   
             ">
           
              <div>
                <div className=" w-full  ">
                  <div className="w-full  flex  flex-col   ">
                   
                   
                   <h1>Error al cargar los mensajes.</h1>

                  </div>
                </div>
              </div>
            </div>
        
          </section>

                </>
              
              )
        }else{
            return ( 
                <>
                    <MenuTOP></MenuTOP>
            <section className="flex flex-row md:flex-row lg:flex-row   h-full w-full pb-8 " >
                    <MenuLater></MenuLater>
            <div className="  w-full h-full  overflow-y-auto z-100 scrollbar-w-0.5  
             scrollbar scrollbar-track-white
              dark:scrollbar-track-white dark:scrollbar-track-rounded-sm
             dark:scrollbar-thumb-gray-700
            scrollbar-thumb-rounded-full   scrollbar-rounded  flex gap-2 flex-col   
             ">
           
              <div>
                <div className=" w-full  ">
                  <div className="w-full  flex  flex-col   ">
                   
                    <ul className=" w-full   py-2 flex flex-col  mr-1 mb-10 md:mb-10">
                        {
                            data.map((mng, index) =>{

                                return (
                                    <Mensaje key={index} id={mng.id} text={mng.Text} isPublic={mng.isPublic} username={mng.username} 
                                    likes={mng.likes} 
                                    ></Mensaje>
                                )

                            })
                        }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
         
          </section>




                </>
              )
        }
        
      }
  
}
 