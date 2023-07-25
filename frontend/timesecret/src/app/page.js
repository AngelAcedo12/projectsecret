"use client"
import { Analytics } from "@vercel/analytics/react";
import { getCookie } from "cookies-next";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import FlechaIrAPerfil from "./component/fkechaIrAPerfil";
import './globals.css';

export default function Home() {
  const router =useRouter()
  const token = getCookie("rt-user-login")
  
    try{
      user= jwt_decode(token)
      router.push("./homePage")
    }catch(err){
      
    }

    
  const descubrirLista1 = () => {
    if( document.getElementById("mas1").innerHTML=="+"){
      document.getElementById("parrafo1").classList.replace("hidden", "block")
      document.getElementById("mas1").innerHTML="-"
    }else{
      document.getElementById("parrafo1").classList.replace("block", "hidden")
      document.getElementById("mas1").innerHTML="+"
    }
    
  
  }
  
  const descubrirLista2 = () => {
    if( document.getElementById("mas2").innerHTML=="+"){
      document.getElementById("parrafo2").classList.replace("hidden", "block")
      document.getElementById("mas2").innerHTML="-"
    }else{
      document.getElementById("parrafo2").classList.replace("block", "hidden")
      document.getElementById("mas2").innerHTML="+"
    }
    
  
  }
  
  const descubrirLista3 = () => {
    if( document.getElementById("mas3").innerHTML=="+"){
      document.getElementById("parrafo3").classList.replace("hidden", "block")
      document.getElementById("mas3").innerHTML="-"
    }else{
      document.getElementById("parrafo3").classList.replace("block", "hidden")
      document.getElementById("mas3").innerHTML="+"
    }
    
  
  }
  
  const descubrirLista4 = () => {
    if( document.getElementById("mas4").innerHTML=="+"){
      document.getElementById("parrafo4").classList.replace("hidden", "block")
      document.getElementById("mas4").innerHTML="-"
    }else{
      document.getElementById("parrafo4").classList.replace("block", "hidden")
      document.getElementById("mas4").innerHTML="+"
    }
    
  
  }
  
  const descubrirLista5 = () => {
    if( document.getElementById("mas5").innerHTML=="+"){
      document.getElementById("parrafo5").classList.replace("hidden", "block")
      document.getElementById("mas5").innerHTML="-"
    }else{
      document.getElementById("parrafo5").classList.replace("block", "hidden")
      document.getElementById("mas5").innerHTML="+"
    }
    
  
  }
  
  const descubrirLista6 = () => {
    if( document.getElementById("mas6").innerHTML=="+"){
      document.getElementById("parrafo6").classList.replace("hidden", "block")
      document.getElementById("mas6").innerHTML="-"
    }else{
      document.getElementById("parrafo6").classList.replace("block", "hidden")
      document.getElementById("mas6").innerHTML="+"
    }
    
  
  }
  const descubrirLista7 = () => {
    if( document.getElementById("mas7").innerHTML=="+"){
      document.getElementById("parrafo7").classList.replace("hidden", "block")
      document.getElementById("mas7").innerHTML="-"
    }else{
      document.getElementById("parrafo7").classList.replace("block", "hidden")
      document.getElementById("mas7").innerHTML="+"
    }
    
  
  }
  const pasarSetcion = () => {
    scrollTo({ top: 1000, left: 0, behavior: "smooth" })
  }
  const volverA = () => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }


  return (
    <>

      <header className="w-full  top-0 bg-white dark:bg-black   ">
        <nav className="flex flex-row  gap-1 justify-between py-3 p-1">
          <div className="justify-start flex w-full items-center  content-center">
            <h1 className="font-normal text-base sm:text-2xl w-full    
                py-3 sm:p-3 
                rounded-lg  transition-all 
                duration-500 cursor-pointer animate-fade ">TEMPORALSECRETS</h1>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:justify-around text-center animate-fade
                items-center content-center    max-h-full w-full max-w-full">
            <a href="https://www.instagram.com/temporalsecrets/" className="sm:p-3 text-xs sm:text-2xl text-center w-full 
                  sm:w-1/2 rounded-lg sm:hover:w-full sm:dark:hover:bg-slate-600 sm:hover:bg-slate-300  transition-all 
                duration-300 cursor-pointer" >Instagram</a>
          </div>
        </nav>
      </header>


      <section className="flex  snap-end flex-col h-full text-xs sm:text-base  w-full items-center
       content-center "  >
        <main className=" h-full  items-center  animate-fade   w-full flex-col flex " >
          <div className="flex flex-col  h-full w-full   justify-center ">
            <div className="h-full flex   flex-col items-center justify-center w-full gap-3 transition-all  hover ">
              <h1 className="w-full text-center text-4xl animate-fade "  >¿  ?</h1>
              <p className=" text-center animate-fade  w-full px-2" >Tu tienes el control y tu decides que hacer con tus datos.
                La red social anonima y temporal. </p>
            </div>
            <div className="text-center flex-col h-full py-4 items-center w-full gap-4 flex justify-center p-7 animate-fade  " >
              <h2 className="   ">¡Registrate pulsado el boton de abajo!</h2>
              <a className=" text-lg  text-center items-center content-center border  animate-fade  border-black  dark:border-white
                  flex p-4 px-7 dark:hover:bg-slate-600 hover:bg-slate-300 rounded-lg transition-all  duration-300"
                href="./SigIn">Registrarse</a>
              
              <h3>Te avisaremos por correo para que seas el primero en probarla.</h3>
            </div>
            <div className="h-full flex-col flex gap-2  justify-center items-center ">
              <h1>¿Qué somos?</h1>
              <div className="items-center flex rotate-90 ">
                <span onClick={pasarSetcion} className="p-2  hover:bg-slate-500 rounded-full items-center cursor-pointer">
                  <FlechaIrAPerfil></FlechaIrAPerfil>
                </span>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="h-full w-full flex flex-col ">
        <div className="p-2 flex-col flex gap-2  justify-center items-center ">

          <div className="items-center flex -rotate-90 ">
            <span onClick={volverA} className="p-2  hover:bg-slate-500 rounded-full items-center cursor-pointer">
              <FlechaIrAPerfil></FlechaIrAPerfil>
            </span>
          </div>
          <h1>VOLVER</h1>
        </div>
        <ol className="p-5  flex-col overflow-y-scroll  scrollbar-thin scrollbar-thumb-black dark:scrollbar-thumb-white justify-evenly list-decimal flwx h-full text-xs sm:text-base ">
          <li className=" gap-2  flex flex-col">
            <p className="py-2">
              Somos la red social única en su clase que te ofrece una experiencia en línea completamente diferente. En TemporalSecrets,
              la privacidad y la libertad de expresión son nuestras prioridades fundamentales. En esta plataforma innovadora, los usuarios pueden elegir ser 
              completamente anónimos o revelar su identidad al público, permitiendo una diversidad de interacciones y comunicación sin precedentes.
            </p>
            <div className="py-2  ">
                <h3 className=" decoration-white py-2  ">¿Qué hace que TemporalSecrets sea especial?</h3>
                <div className="h-0.5 w-32   bg-black">
                  <span></span>
                </div>
            </div>        
          </li>
          <li className=" w-full items-center" >
               
                <div className="flex jus flex-row items-center w-full gap-2">
                  <h1 id="item1Lista " className="py-2 border-b  dark:border-white border-black ">  Anonimato predeterminado</h1>
                  <button id="mas1"  onClick={descubrirLista1}  className="px-2  cursor-pointer active:bg-slate-400 py-1 rounded-lg">+</button>
                </div>
               
                <p id="parrafo1" className="py-2 pl-2 hidden transition-all">A diferencia de otras redes sociales, donde tu identidad está al descubierto desde 
                  el principio, 
                  en TemporalSecrets, todos los usuarios son inicialmente anónimos. Esto proporciona una capa de protección y comodidad, 
                  permitiendo a las personas expresarse 
                  sin temor a ser juzgados o acosados por sus opiniones o pensamientos.</p>
              
               
            </li>
            <li className=" w-full">
              <div>
                <div className="flex flex-row items-center w-full gap-2">
                  <h1 id="item1Lista2" className="py-2 border-b dark:border-white border-black ">Flexibilidad de identidad</h1>
                  <button id="mas2"  onClick={descubrirLista2}  className="px-2  cursor-pointer active:bg-slate-400 py-1 rounded-lg">+</button>
                </div>
               
                <p id="parrafo2" className="py-2 pl-2 hidden transition-all">
                Aunque el anonimato es la configuración predeterminada, respetamos tu derecho a decidir cómo quieres interactuar. Puedes optar por permanecer anónimo todo el tiempo o revelar tu identidad de forma selectiva o completa, dependiendo de la situación y con quién desees comunicarte.
                </p>
              </div>
               
            </li>
            <li className=" w-full">
              <div>
                <div className="flex flex-row items-center w-full gap-2">
                  <h1 id="item1Lista3" className="py-2 border-b dark:border-white border-black  "> Mensajes como usuarios</h1>
                  <button id="mas3"  onClick={descubrirLista3}  className="px-2  cursor-pointer active:bg-slate-400 py-1 rounded-lg">+</button>
                </div>
               
                <p id="parrafo3" className="py-2 pl-2 hidden transition-all">En TemporalSecrets, los mensajes  son tan dinámicos como los propios usuarios.
                 Cada mensaje puede ser creado tanto por usuarios anónimos como por aquellos que han optado por ser públicos. Además, los mensajes también pueden 
                 ser enviados de manera anónima o pública, lo que brinda una amplia 
                gama de opciones para compartir contenido sin restricciones.</p>
              </div>
               
            </li>
            <li className=" w-full">
              <div>
                <div className="flex flex-row items-center w-full gap-2">
                  <h1 id="item1Lista4" className="py-2 border-b dark:border-white border-black ">Privacidad y seguridad</h1>
                  <button id="mas4"  onClick={descubrirLista4}  className="px-2  cursor-pointer active:bg-slate-400 py-1 rounded-lg">+</button>
                </div>
               
                <p id="parrafo4" className="py-2 pl-2 hidden transition-all">Valoramos tu seguridad y privacidad. Utilizamos 
                las últimas tecnologías de cifrado y medidas de protección para garantizar que tus datos personales 
                y comunicaciones estén a salvo de cualquier intrusión no deseada.</p>
              </div>
               
            </li>

            <li className=" w-full">
              <div>
                <div className="flex flex-row items-center w-full gap-2">
                  <h1 id="item1Lista5" className="py-2 border-b dark:border-white border-black  ">Libertad de expresión responsable</h1>
                  <button id="mas5"  onClick={descubrirLista5}  className="px-2  cursor-pointer active:bg-slate-400 py-1 rounded-lg">+</button>
                </div>
               
                <p id="parrafo5" className="py-2 pl-2 hidden transition-all">Fomentamos la libertad de expresión en TemporalSecrets, siempre y 
                cuando sea de manera responsable y respetuosa. Cualquier forma de discurso de odio, acoso o contenido 
                inapropiado no será tolerada y será eliminada de la plataforma.</p>
              </div>
               
            </li>
            <li className=" w-full">
              <div>
                <div className="flex flex-row items-center w-full gap-2">
                  <h1 id="item1Lista6" className="py-2 border-b dark:border-white border-black ">Explora sin límites</h1>
                  <button id="mas6"  onClick={descubrirLista6}  className="px-2  cursor-pointer active:bg-slate-400 py-1 rounded-lg">+</button>
                </div>
               
                <p id="parrafo6" className="py-2 pl-2 hidden transition-all">TemporalSecrets es un espacio para que las personas se conecten, compartan y 
                descubran nuevos pensamientos e ideas. Con nuestro enfoque en la privacidad y la diversidad de identidades, los usuarios pueden explorar temas y 
                puntos de vista sin restricciones, enriqueciendo así su experiencia en la red social.
                </p>
              </div>
            </li>
            <li className=" w-full">
              <div>
                <div className="flex flex-row items-center w-full gap-2">
                  <h1 id="item1Lista7" className="py-2 border-b dark:border-white border-black  ">Diarios personales(En valoracion) </h1>
                  <button id="mas7"  onClick={descubrirLista7}  className="px-2  cursor-pointer active:bg-slate-400 py-1 rounded-lg">+</button>
                </div>
                <p id="parrafo7" className="py-2 pl-2 hidden transition-all">En TemporalSecrets, valoramos la singularidad de cada individuo.
                 Cada usuario tiene su propio diario personal, un espacio privado donde puedes compartir tus pensamientos, ideas y experiencias sin restricciones.
                </p>
              </div>
            </li>
            <li className=" gap-2 py-2 flex flex-col">
                <p className="py-4">
                Creemos que todos deben tener la libertad de expresarse como deseen. Nuestra plataforma es un lugar 
                donde la identidad y la expresión son dinámicas, y donde todos pueden encontrar su voz sin temor. 
                ¡Únete a nosotros hoy y sumérgete en una nueva y emocionante experiencia en línea en TemporalSecrets!
            </p>
             
          </li>
        </ol>
       
      </section>

      <Analytics mode='auto'></Analytics>
    </>



  )

}
