import Link from "next/link";
import Megusta from "./botonMegusta";

export default function Mensaje() {

    return (
        <>
            <div className="  border-gray-200 text-xs sm:text-lg dark:border-gray-500 border-2 mb-20 px-3 break-words  dark:hover:border-slate-200 rounded-lg transition-all duration-150  dark:shadow-neutral-500   py-5   ">
                <div className="w-full items-center"> 
                    <h1>Usuario: Manolll</h1>
                </div>
                <div >
                    <p className="break-words py-2">
                        asdoiajsdioasjdasoidasdasdasdasdasdasdasdasdasdasdasd
                        asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                        asdasdasdasdasdasdasdasdasdasdasd
                    </p>
                </div>
                <div className="flex flex-row items-center text-center">
                    <Megusta></Megusta>
                </div>
                <div className="w-full  border-t border-gray-300 mt-2 flex text-center items-center justify-center">
                    <Link className="w-30 px-2 text-xs sm:text-lg py-3 mt-3 transition-all duration-150 border  hover:border-black dark:hover:border-white dark:hover:bg-slate-500 hover:bg-slate-300 rounded-lg"  href={"../"}>Ver Respuestas</Link>
                </div> 
            </div>
        
        </>
    )
  
}
