import Link from "next/link";
import Megusta from "./botonMegusta";
import CompartirdoVeces from "./compartidosMensaje";
import Visualizacions from "./visualizaciones";

export default function Mensaje() {

    return (
        <>
            <div className=" dark:border-white border-black  py-5   p-2 ">
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
                    <Visualizacions></Visualizacions>
                    <CompartirdoVeces></CompartirdoVeces>
                </div>
                <div className="w-full  border-t  border-gray-500 mt-2 flex text-center items-center justify-center">
                    <Link className="w-1/2 py-3 mt-3  dark:hover:bg-slate-500 hover:bg-slate-300 rounded-lg"  href={"../"}>Ver Respuestas</Link>
                </div> 
            </div>
        
        </>
    )
  
}
