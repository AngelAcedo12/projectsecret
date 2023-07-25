import { createUser } from "@/services/Users";


const crearUsuario = async () => {

   
    let loading = false;
    let response = false;
    const resultCreater = async () => {
        if (await createUser().then(res =>response=res
        ).catch(err => {
            
            console.log(err)
        })) 
        {
         
            loading=true;
        }else{
            
            loading=true;
        }
    }
    
   await resultCreater()
    if(loading==true){
        return response;
    }else{
      
    }
    

}

export {
    crearUsuario
};
