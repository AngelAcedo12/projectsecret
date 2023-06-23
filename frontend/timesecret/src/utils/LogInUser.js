import { userLogin } from "@/services/Users";
import { comparePassword } from "./desencripter";
const verifyUserLogin = async () => {
    let loading = false;
    const datos = {
        username: document.getElementById("usernameInput").value,
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value,
    }
    let resultado = []
     resultado = await userLogin(datos.username).then(res =>  {
        if (res.isEmtpy==false) {
            console.log("Ok")
            loading=true;
            console.log(res)
            res.data.map((ele ) => {
                console.log(ele)
                console.log(comparePassword(datos.password,ele.password))

            })
            return res.data        


        }else{
            loading=true;
            console.log(res)
            console.log("No")
            return res.data;
        }



    }
    
    )


   
    

    

}

export {
    verifyUserLogin
};
