import Buscador from "@/app/component/buscador"
import MenuInferior from "@/app/component/menuInferion"

export default function Profiler({params}){
    console.log(params)

    return (
        <>
       <header className="w-full   top-0  ">
            <nav className="flex flex-row  gap-2 justify-between py-1 p-1">
              <div className="justify-start flex w-full items-center  content-center">
                <h1 className="font-normal  text-base sm:text-3xl text-start  w-full 
                   py-2 sm:p-3 
                  rounded-lg  transition-all 
                duration-500  animate-fade ">TEMPORALSECRETS</h1>
              </div>
     
              <div className="w-full">
                <Buscador></Buscador>
              </div>
            </nav>
          </header>
          
        <div className="h-full">
            
                <main className="h-full flex justify-between w-full">
                            
                            
                      
                        

                        

                        <div className="h-full w-full">

                        </div>          
                </main>
                <div className="absolute bottom-0  py-2 w-full">
                      <MenuInferior></MenuInferior>
                </div>
        </div>
       
        </>
    )



}