import Link from "next/link";
import Megusta from "./botonMegusta";

export default function Mensaje() {

    return (
        <>
            <div className="   text-xs sm:text-lg  dark:hover:bg-[#0D0D0D] bg-blend-color-burn border border-[#808080]   dark:border-[#808080]  px-5 rounded-md
             transition-all duration-100  dark:shadow-neutral-500   py-3   ">
                <div className="w-full items-center py-1"> 
                    <h1>Usuario: Manolll</h1>
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
