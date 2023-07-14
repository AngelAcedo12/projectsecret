import Link from "next/link";
import Megusta from "./botonMegusta";

export default function Mensaje() {

    return (
        <>
            <div className="   text-xs sm:text-lg   dark:border-white border-black bg-blend-color-burn    px-5 
             transition-all duration-100     py-3 ">
                <div className="w-full items-center py-1"> 
                    <h1 className="  bg-clip-text text-transparent sm:text-2xl  
             bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-red-400 via-pink-700 to-yellow-200
                    dark:bg-gradient-to-r dark:from-green-300  dark:via-blue-500 dark:to-purple-600]">Usuario: Manolll</h1>
                </div>
                <div >
                    <p className="break-words py-2">
                        asdoiajsdioasjdasoidasdasdasdasdasdasdasdasdasdasdasd
                        asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                        asdasdasdasdasdasdasdasdasdasdasd
                    </p>
                </div>
                <div className="flex flex-row items-center h-fit text-center">
                    <Megusta></Megusta>
                </div>
                <div className="w-full  border-t border-gray-300 mt-2 flex text-center items-center justify-center">
                    <Link className="w-30 px-2 text-xs sm:text-lg py-1 mt-3 transition-all duration-150 border  hover:border-black dark:hover:border-white dark:hover:bg-slate-500 hover:bg-slate-300 rounded-lg"  href={"../"}>Ver Respuestas</Link>
                </div> 
            </div>
        
        </>
    )
  
}
