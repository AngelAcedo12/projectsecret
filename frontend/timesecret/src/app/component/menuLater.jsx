import Link from "next/link";
import Inicio from "./Inicio";
import CrearMenu from "./crearMenu";
import DiarioMenu from "./diarioMenu";
import PerfilMenu from "./perfilMenu";

export default function MenuLater(){


    return (

        <nav className="px-3 border-r block  border-black py-3  dark:border-slate-300" >
        <ul className="h-full w-full items-center flex  flex-col gap-2">
            <li className=" w-full justify-center flex flex-row text-center items-center   
                  gap-2  ">
               <Inicio></Inicio>
               <Link href="/homePage" className="text-center px-3 hidden sm:block">Inicio</Link>
            </li>
           
            <li  className=" w-full justify-center flex flex-row text-center items-center   
                  gap-2"> 
                <CrearMenu></CrearMenu>
                <Link href="/createMenssage"  className="text-center px-3 hidden sm:block">Crear</Link>
            </li>
            <li  className=" w-full justify-center flex flex-row text-center items-center   
                  gap-2">
                <PerfilMenu></PerfilMenu>
                <Link href="/Profile" className="text-center px-3 hidden sm:block">Perfil</Link>
            </li>
            <li className="hidden w-full flex-row text-center items-center px-1 rounded-lg border border-gray-300 dark:border-gray-700 dark:hover:border-white transition-all duration-150 hover:border-zinc-950 dark:hover:bg-slate-500 hover:bg-slate-300   gap-2">
                <DiarioMenu></DiarioMenu>
                <Link  href="./" className="text-center px-3 hidden sm:block">Diario</Link>
            </li>
        </ul>
        </nav>

    )

}