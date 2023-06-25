import Inicio from "./Inicio";

export default function MenuInferior(){
 

    return (

        <ul className="h-full w-full justify-evenly items-center flex ">
            <li className=" w-full  ">
               <Inicio></Inicio>
            </li>
            <li  className=" w-full ">
                Chats
            </li>
            <li  className=" w-full "> 
                Crear
            </li>
            <li  className=" w-full ">
                Perfil
            </li>
        </ul>

 
    )

}