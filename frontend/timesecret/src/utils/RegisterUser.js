const { createUser } = require("@/services/Users");


function utilsRegisterUser(event){
    const  datos = {
        username: document.getElementById("usernameInput").value,
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value,
    }

    const reg = async function () {
        event.preventDefault();
        
        console.log(datos)
        if(await createUser(datos)) {
            console.log("qsdasda")
            return true;
        }else{
            return false;
        }

        

    }
    reg();
  
    


}

export {
    utilsRegisterUser
};
