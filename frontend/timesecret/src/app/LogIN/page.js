"use client"
import { verifyUserLogin } from "@/utils/LogInUser";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default function page(){
    const router = useRouter()
    const  submit  = async (e) => {
        e.preventDefault();
        
        const load = toast.loading("Verificando datos...", {className:"dark:bg-slate-500 dark:text-white bg-slate-300"})
        const datos = {
            username: document.getElementById("usernameInput").value,
            email: document.getElementById("emailInput").value,
            password: document.getElementById("passwordInput").value,
        }
        const init = async() => {
            
            document.getElementById("btnReg").disabled=true;
            document.getElementById("btnReg").value="Iniciando sesion...";
            return await verifyUserLogin(datos)
            
        }
        if(await init()){
            toast.dismiss(load)
            toast.update(load,{ type:"success", autoClose:3000,className:"dark:bg-slate-500 dark:text-white bg-slate-300 ",render:"Ok",
            isLoading:false,progressClassName:" bg-gradient-to-l from-sky-400 to-cyan-300 "})
            document.getElementById("btnReg").disabled=false;
            document.getElementById("btnReg").value="Iniciar sesion";
            router.push("./homePage")
        }else{
            toast.update(load,{ type:"error", autoClose:3000,className:"dark:bg-slate-500 dark:text-white bg-slate-300 ",render:"Datos introducidos incorectos",
            isLoading:false,progressClassName:" bg-gradient-to-l from-sky-400 to-cyan-300 "})
            document.getElementById("usernameInput").value="",
            document.getElementById("passwordInput").value="",
            document.getElementById("emailInput").value="",
            document.getElementById("btnReg").disabled=false;
            document.getElementById("btnReg").value="Iniciar sesion";
            
        };
    
    }
   

    return (
        
        
        <>

            <main id="main" className="flex  h-full w-full">
                <section className="flex justify-around flex-col max-h-screen h-full w-full items-center
                content-center ">

                    <main className="py-5 h-full max-h-screen items-center  w-full flex-col px-2   flex ">

                        <div className=" h-20 text-center flex justify-center">
                            <h1 className="text-2xl sm:text-3xl flex text-center items-center content-center">Iniciar Sesion</h1>
                        </div>
                        <form onSubmitCapture={submit} className="h-full flex flex-col justify-center gap-5 text-xs w-fit sm:text-base sm:w-1/2 px-3" >
                            Usuario<input id="usernameInput" required={true} minLength={6} className="bg-transparent placeholder:text-gray-700 dark:placeholder:text-gray-300 border-b-2 border-separate border-spacing-1 
                  dark:text-white py-1 invalid:border-red-600 valid:border-green-500 text-black transition-all duration-500 outline-none "
                                type="text" placeholder="Nombre de usuario "></input>
                            Email<input id="emailInput" required={true} minLength={6} maxLength={50} className=" invalid:border-red-600 bg-transparent selection:bg-transparent placeholder:text-gray-700 dark:placeholder:text-gray-300  border-b-2 border-separate border-spacing-1 
                  dark:text-white py-1 text-black  transition-all  valid:border-green-500 duration-500 outline-none"  type="email" placeholder="Introduzca tu email"></input>
                            Contraseña<input id="passwordInput" required={true} minLength={6} className="bg-transparent placeholder:text-gray-700 dark:placeholder:text-gray-300   border-b-2 border-separate border-spacing-1
                  dark:text-white py-1 text-black  transition-all valid:border-green-500 invalid:border-red-600 duration-300 outline-none" autoComplete="none" type="password" placeholder="Introduce la contraseña"></input>
                            <input disabled={false} id="btnReg" value={"Iniciar sesion"} className="p-4  border-black border dark:border-white hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg cursor-pointer   transition-all duration-300" type="submit"></input>
                        </form>
                    </main>
                </section>
            </main>
            <ToastContainer autoClose={1000} hideProgressBar={false} ></ToastContainer>
            <Analytics mode='auto'></Analytics>
    </>
        
        )



}