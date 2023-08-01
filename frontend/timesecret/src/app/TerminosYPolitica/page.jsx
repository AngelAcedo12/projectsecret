
export default function Page() {
   return (
      <div className="h-full p-5 gap-2 overflow-y-scroll md:overflow-hidden break-normal scrollbar-thin scrollbar-thumb-white">
         <h1 className="py-2 border-b mb-2"> Política y Términos de Servicio de TemporalSecrets:</h1>
         <div>
            <h1 className="">1. Privacidad y Anonimato:</h1>
            <ul  className="p-2 gap-2 flex flex-col">
               <li>
                   a. En TemporalSecrets, respetamos la privacidad de nuestros usuarios.
                    Los datos personales recopilados, como direcciones de correo electrónico y nombres,
                     se mantendrán confidenciales y no serán compartidos con terceros sin el consentimiento del usuario.
               </li>
               <li>
                   b. Los usuarios tienen la opción de publicar mensajes de forma anónima o con identificación pública. Aquellos que elijan la opción anónima serán
                    identificados solo por un identificador único generado por la plataforma.
               </li>
            </ul>
         </div>

         <div>

           <h1> 2. Contenido del Usuario:</h1>
            <ul className="p-2 gap-2 flex flex-col">

               <li>  a. Los usuarios son responsables del contenido que publiquen en TemporalSecrets. No toleramos el acoso, 
                  la difamación, la violencia o el contenido inapropiado.
                  Cualquier violación de esta norma puede resultar en la suspensión o eliminación de la cuenta del usuario.
               </li>
               <li>
                  b. TemporalSecrets no se hace responsable del contenido generado por los usuarios y no asume ninguna responsabilidad por
                  las consecuencias derivadas del contenido publicado por los usuarios.
               </li>
            </ul>

         </div>
         <div>
            <h1>3. Uso Apropiado:</h1>
            <ul className="p-2 gap-2 flex flex-col">
               <li>
                     a. Los usuarios deben utilizar TemporalSecrets de manera ética y 
                     responsable. No está permitido el uso de la plataforma para actividades ilegales, spam, 
                     o cualquier otra acción que pueda afectar negativamente a otros usuarios o al sistema en general.
               </li>
               <li>
                     b. La plataforma puede suspender o 
                     eliminar cuentas de usuarios que se involucren en conductas inapropiadas o que violen estos términos de servicio.
               </li>
            </ul>
          
         </div>
        <div>
            <h1>4. Propiedad Intelectual:</h1>
         <ul className="p-2 gap-2 flex flex-col">
            <li>
                a. Todo el contenido y los derechos de 
                propiedad intelectual relacionados con TemporalSecrets son propiedad de la plataforma. 
                Los usuarios no pueden reproducir, distribuir o utilizar el contenido de la aplicación sin el consentimiento expreso de TemporalSecrets
            </li>
         
         </ul>
        </div>
        <div>
        <h1>5. Modificaciones de los Términos de Servicio:</h1>
         <ul className="p-2 gap-2 flex flex-col">
            <li>
               a. TemporalSecrets se reserva el derecho de modificar estos términos de servicio en cualquier momento.
                Los usuarios serán notificados de cualquier cambio y deberán aceptar los nuevos términos para seguir utilizando la aplicación.

            </li>
         </ul>
        </div>
        <p>
        Al utilizar TemporalSecrets, los usuarios aceptan estos términos y políticas de
         servicio. Cualquier infracción de estas normas puede resultar en la suspensión o eliminación de la cuenta del usuario.
        </p>
      </div>
   )
}


