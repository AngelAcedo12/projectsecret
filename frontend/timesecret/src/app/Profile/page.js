"use client"
import MenuLater from "@/app/component/menuLater";
import { obteinMessageforUser } from "@/services/Mensajes";
import { dataForUser } from "@/utils/UtilsProfile";
import { getCookie } from "cookies-next";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AnonimateProfile from "../component/anonimateProfile";
import Loader from "../component/loader";
import Mensaje from "../component/mensaje";
import MenuTOP from "../component/menuTOP";
import PublicProfile from "../component/publicProfile";

export default  function Profiler({ params }) { 
  const token = getCookie("rt-user-login")
  
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isEmtpy, setIsEmtpy] = useState(false);
  const [mesanjes,setMensajes] = useState([])
  const [tipoPerfil,setTipo] = useState("anonimo")
  const [logProfile,setLog] = useState(<AnonimateProfile></AnonimateProfile>)
  const rooter = useRouter()
  useEffect(() => {
    let user=null;
    try{
     user= jwt_decode(token)
     dataForUser(user.username).then(res => {
    try{
      if (res.isEmtpy) {
        setIsEmtpy(true);
      }else{
        setIsEmtpy(false)
        setData(res.resultFInd[0])
        obteinMessageforUser(user.username).then(res => setMensajes(res))
       
      }
      setLoading(true)
      
    }catch(err){
      console.log(err);
      setIsEmtpy(true)
      setLoading(true)
    }
    try{
      setTipo(data.typePerfil)
      if(tipoPerfil=="anonimo"){
        setLog(<AnonimateProfile></AnonimateProfile>)
      }else if(tipoPerfil=="public"){
        setLog(<PublicProfile></PublicProfile>)
      }
    }catch(err){
      console.log(err);
    }
   
    })
    }catch{
      rooter.push("./LogIN")
    }
    
   


  }, [])


  if (loading == false) {

    return (
      <>
       <MenuTOP></MenuTOP>

      <section className="flex flex-row   h-full w-full pb-8 " >
        <MenuLater></MenuLater>
        <Loader></Loader>
      </section>

      </>
      
  
    )






  } else {
    if (isEmtpy) {
      return (
      
        
          <>
           <MenuTOP></MenuTOP>
            
          <section className="flex flex-row   h-full w-full pb-8 " >
            <MenuLater></MenuLater>
            <div className="h-full w-full items-center flex justify-center">
                <h1 className="">Usuario no encotrado</h1>
            </div>
          
        
          </section>
    
          </>
      
      
      
      )
    } else {



      return (
        <>
          <MenuTOP></MenuTOP>

          <section className="flex flex-row   h-full w-full pb-8 " >
            <MenuLater></MenuLater>
            <div className="  w-full h-full  overflow-y-auto z-100 scrollbar-w-0.5   scrollbar scrollbar-track-white dark:scrollbar-track-white dark:scrollbar-track-rounded-sm dark:scrollbar-thumb-gray-700
            scrollbar-thumb-rounded-full   scrollbar-rounded  flex gap-2 flex-col   
             ">
              <div className="w-full sticky top-0  z-10 border-b  py-5 text-white text  bg-white dark:bg-black  border-black
               dark:border-white rounded-lg   justify-normal flex-col  flex  ">
                <div className="flex   items-center  flex-row w-full  justify-center gap-2  text-center px-2 text-sm">
                  <h1 className="sm:text-xl text-base bg-clip-text text-transparent bg-gradient-to-r from-green-300
                   via-blue-500 to-purple-600" >{data.username}</h1>
                   {
                    logProfile
                   }
                </div>
              
              </div>
              <div>
                <div className=" w-full  ">
                  <div className="w-full  flex  flex-col   ">
                    <h1 className="text-center py-3 ">Mensajes</h1>
                    <ul className=" w-full   py-2 flex flex-col  mr-1 mb-10 md:mb-10">
                      {
                          mesanjes.map((mng, index) =>{
                     
                            let like= false
                            data.MngLikes.map((elemt)=>{
                              if(elemt.id===mng.id){
                                like=true
                              }
                            })
                            return (
                                <Mensaje key={index} like={like} id={mng.id} text={mng.Text} isPublic={mng.isPublic} username={mng.username} 
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
