"use client"
import { ToastContainer, toast } from "react-toastify";

import { crearUsuario } from "@/utils/RegisterUser";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function page() {
    const router = useRouter()
    const submit = (e) => {
        e.preventDefault();
       
        const create = async () => {
            const load = toast.loading("Registrandote...", {className:"dark:bg-slate-500 dark:text-white bg-slate-300" })
            document.getElementById("btnReg").disabled = true;
            document.getElementById("btnReg").value = "Registrandote...";
        
            if (await crearUsuario().then(res => {
                return res 
            })) {
              
                toast.update(load,{ type:"success", autoClose:1500,className:"dark:bg-slate-500 dark:text-white bg-slate-300 ",
                render:"Registrado",isLoading:false,progressClassName:"bg-gradient-to-l from-sky-400 to-cyan-300"})
                setInterval(() => {
                    router.push("../")
                }, 3000);
            } else {
               
                toast.update(load,{ type:"error", autoClose:1500,className:"dark:bg-slate-500 dark:text-white bg-slate-300 ",
                render:"Usuario ya registrado",isLoading:false,progressClassName:" bg-gradient-to-l from-sky-400 to-cyan-300 "})
                document.getElementById("usernameInput").value="",
                document.getElementById("passwordInput").value="",
                document.getElementById("emailInput").value="",
                document.getElementById("btnReg").disabled = false;
                document.getElementById("btnReg").value = "Registrarse";
               
            }

        }
        create()


    }

    const verificarContraseñaIsEquals = () => {
        const contraseña1 = document.getElementById("passwordInput")
        const constraseña2 = document.getElementById("passwordInput2")
       
        if (constraseña2.value==contraseña1.value){
           
            document.getElementById("msgPassword22").innerHTML=""
            constraseña2.classList.remove("border-red-600")
            constraseña2.classList.add("border-green-500")
            document.getElementById("btnReg").disabled = false;
        }else{
            document.getElementById("msgPassword22").innerHTML="Las contraseñas no coinciden"
            constraseña2.classList.remove("border-green-500")
            constraseña2.classList.add("border-red-600")
            document.getElementById("btnReg").disabled = true;

        }
    }


    return (
        <>
            <main id="main" className="flex  h-full w-full">
                <section className="flex justify-around flex-col max-h-screen h-full w-full items-center
                content-center ">

                    <main className="py-5 h-full max-h-screen items-center  w-full flex-col px-2   flex ">

                        <div className=" h-20 text-center flex justify-center">
                            <h1 className="text-2xl sm:text-3xl flex text-center items-center content-center">Registrarse</h1>
                        </div>
                        <form onSubmitCapture={submit} className="h-full flex flex-col justify-center gap-3 text-xs w-fit sm:text-base sm:w-1/2 px-3" >
                            Usuario<input id="usernameInput" required={true} minLength={6} className="bg-transparent placeholder:text-gray-700 dark:placeholder:text-gray-300 border-b-2 border-separate border-spacing-1 
                  dark:text-white py-1 invalid:border-red-600 valid:border-green-500 text-black transition-all duration-500 outline-none "
                                type="text" placeholder="Nombre de usuario "></input>
                            Email<input id="emailInput" required={true} minLength={6} maxLength={50} className=" invalid:border-red-600 bg-transparent selection:bg-transparent placeholder:text-gray-700 dark:placeholder:text-gray-300  border-b-2 border-separate border-spacing-1 
                  dark:text-white py-1 text-black  transition-all   valid:border-green-500 duration-500 outline-none"  type="email" placeholder="Introduzca tu email"></input>
                        Contraseña
                        <div className="">
                        <input id="passwordInput" required={true} minLength={6} className=" w-full bg-transparent placeholder:text-gray-700 dark:placeholder:text-gray-300  
                         border-b-2 border-separate border-spacing-1
                       dark:text-white py-1 text-black  transition-all  valid:border-green-500 invalid:border-red-600 duration-300 outline-none" autoComplete="none" 
                       type="password"
                        placeholder="Introduce la contraseña"></input>
                           
                        </div>
                        Repite la contraseña
                            <div>
                            <input onChange={verificarContraseñaIsEquals} id="passwordInput2" required={true} minLength={6} className="w-full bg-transparent placeholder:text-gray-700 dark:placeholder:text-gray-300   border-b-2 border-separate border-spacing-1
                            dark:text-white py-1 text-black  transition-all invalid:border-red-600 duration-300 outline-none" autoComplete="none" type="password"
                            placeholder="Introduce la contraseña"></input>
                            <h3 id="msgPassword22" className=" w-full  text-red-500"></h3>
                            </div>
                            <h1 className="text-xs">
                                Tipo de perfil por defefecto es siempre anonimo, esta opcion se puede cambiar el las opciones del perfil una vez registrado
                            </h1>
                            <Link href={"/TerminosYPolitica"} className="text-xs w-fit hover:text-blue-300 ">Al registrate aceptas automaticamente nuestros terminos y polita de servicio. Pulsa sobre este texto para revisarlos</Link>
                            <input disabled={true} id="btnReg" value={"Resgistrarse"} className="p-4 disabled:bg-red-500 disabled:text-white bg-green-500 text-black  
                            hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg cursor-pointer   transition-all duration-300" type="submit"></input>

                        </form>

                    </main>
                </section>
            </main>
            <ToastContainer></ToastContainer>
            <Analytics mode='auto'></Analytics>
        </>
    )


}