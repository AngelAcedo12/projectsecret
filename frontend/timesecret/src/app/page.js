"use client"
import { Analytics } from "@vercel/analytics/react";
import FlechaIrAPerfil from "./component/fkechaIrAPerfil";
import './globals.css';

export default function Home() {




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
            <a href="https://twitter.com/temporalsecrets" className="sm:p-3 text-xs sm:text-2xl text-center w-full 
                  sm:w-1/2 rounded-lg sm:hover:w-full sm:dark:hover:bg-slate-600 sm:hover:bg-slate-300  transition-all 
                duration-300 cursor-pointer">Twitter</a>
          </div>
        </nav>
      </header>


      <section className="flex  snap-end flex-col h-full text-xs sm:text-base  w-full items-center
       content-center "  >

        <main className=" h-full  items-center  animate-fade   w-full flex-col flex " >

          <div className="flex flex-col  h-full w-full   justify-center ">

            <div className="h-full flex   flex-col items-center justify-center w-full gap-3 transition-all  hover ">
              <h1 className="w-full text-center text-4xl animate-fade "  >¿  ?</h1>
              <p className=" text-center animate-fade  w-full" >Tu tienes el control y tu decides que hacer con tus datos.
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
        <ol className="p-3 flex-col overflow-y-scroll flwx h-full text-xs sm:text-base ">
          <li className="p-3">
            <p className="py-2">
              Somos la red social única en su clase que te ofrece una experiencia en línea completamente diferente. En TemporalSecrets,
              la privacidad y la libertad de expresión son nuestras prioridades fundamentales. En esta plataforma innovadora, los usuarios pueden elegir ser 
              completamente anónimos o revelar su identidad al público, permitiendo una diversidad de interacciones y comunicación sin precedentes.
            </p>
            <div className="py-2  ">
                <h3 className=" decoration-white py-2  ">¿Qué hace que TemporalSecrets sea especial?</h3>
                <div className="h-0.5 w-32    dark:bg-white  bg-black">
                  <span></span>
                </div>
            </div>
          <p>
          1. Anonimato predeterminado: A diferencia de otras redes sociales, donde tu identidad está al descubierto desde el principio, en TemporalSecrets, todos los usuarios son inicialmente anónimos. Esto proporciona una capa de protección y comodidad, permitiendo a las personas expresarse sin temor a ser juzgados o acosados por sus opiniones o pensamientos.
    2. Flexibilidad de identidad: Aunque el anonimato es la configuración predeterminada, respetamos tu derecho a decidir cómo quieres interactuar. Puedes optar por permanecer anónimo todo el tiempo o revelar tu identidad de forma selectiva o completa, dependiendo de la situación y con quién desees comunicarte.
    3. Mensajes como usuarios: En TemporalSecrets, los mensajes son tan dinámicos como los propios usuarios. Cada mensaje puede ser creado tanto por usuarios anónimos como por aquellos que han optado por ser públicos. Además, los mensajes también pueden ser enviados de manera anónima o pública, lo que brinda una amplia gama de opciones para compartir contenido sin restricciones.
    4. Privacidad y seguridad: Valoramos tu seguridad y privacidad. Utilizamos las últimas tecnologías de cifrado y medidas de protección para garantizar que tus datos personales y comunicaciones estén a salvo de cualquier intrusión no deseada.
    5. Temas temporales: Nuestro enfoque único en temas temporales le da nombre a la plataforma. Los mensajes y publicaciones tienen una vida útil predeterminada, lo que significa que desaparecen después de un período específico. Esto fomenta una comunicación más efímera y auténtica, donde las conversaciones se centran en el momento y el contenido fresco, sin preocuparse por el pasado.
    6. Libertad de expresión responsable: Fomentamos la libertad de expresión en TemporalSecrets, siempre y cuando sea de manera responsable y respetuosa. Cualquier forma de discurso de odio, acoso o contenido inapropiado no será tolerada y será eliminada de la plataforma.
    7. Explora sin límites: TemporalSecrets es un espacio para que las personas se conecten, compartan y descubran nuevos pensamientos e ideas. Con nuestro enfoque en la privacidad y la diversidad de identidades, los usuarios pueden explorar temas y puntos de vista sin restricciones, enriqueciendo así su experiencia en la red social.
          </p>

          

          
        
          </li>

        </ol>
       
      </section>

      <Analytics mode='auto'></Analytics>
    </>



  )

}
