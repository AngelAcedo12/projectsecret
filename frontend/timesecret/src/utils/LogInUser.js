import { userLogin } from "@/services/Users";

import { setCookie } from "cookies-next";
import { comparePassword } from "./desencripter";
const verifyUserLogin = async (datos) => {
    
    let loading = false;
    let passwordEncrypter="";
    let email = ""; 
    let username = "";
    let token = "";
    let resultado = []
    await userLogin(datos.username).then(res =>  {
       try
       {
        if (res.isEmtpy==false) {
           
            loading=true;
            token = res.token;
            res.resultFInd.map((elemento) => {
                passwordEncrypter=elemento.password,
                email= elemento.email,
                username = elemento.username
                
            })
         
           


        }else{
            loading=true;
            
            console.log("No")
          
        }

       }catch(err){
        

       }
       


    }
    
    )

    if(await comparePassword(datos.password, passwordEncrypter)){
        setCookie('rt-user-login',`${token}`, {
            maxAge: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        })
        
        return true;
    }else{
  
        return false;
    }
    

    

}

export {
    verifyUserLogin
};
