import { createUser } from "@/services/Users";
import { toast } from "react-toastify";


const crearUsuario = async () => {

   
    let loading = false;
    let response = false;
    const resultCreater = async () => {
        if (await createUser().then(res => res.json().then(data => {
            console.log(data)
          response=data
        }
        )).catch(err => {
            console.log(err)
        })) {
         
            loading=true;
        }else{
            
            loading=true;
        }



    }
    toast("Registrandote...", { type: "warning ", isLoading: loading, theme: "colored" })
   await resultCreater()
    if(loading==true){
        response=true;
        toast("Completado", {type:"success" , theme: "colored" })
        return response;
    }else{
        toast("Registrandote...", { type: "warning ", isLoading: loading, theme: "colored" })
    }
    

}

export {
    crearUsuario
};
