import CrearMenu from "./crearMenu";
import DiarioMenu from "./diarioMenu";
import Inicio from "./Inicio";
import PerfilMenu from "./perfilMenu";

export default function MenuInferior(){
 

    return (
        <nav>

       
        <ul className="h-full w-full bg-white dark:bg-black border-t border-black b items-center flex ">
            <li className=" w-full ">
               <Inicio></Inicio>
            </li>
           
            <li  className=" w-full "> 
                <CrearMenu></CrearMenu>
            </li>
            <li  className=" w-full ">
                <PerfilMenu></PerfilMenu>
            </li>
            <li className="hidden w-full">
                <DiarioMenu></DiarioMenu>
            </li>
        </ul>
        </nav>
 
    )

}