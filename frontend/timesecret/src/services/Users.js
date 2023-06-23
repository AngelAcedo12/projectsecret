
 


async function createUser(data){
     
    const BACK_URI = process.env.BACK_URI;
    console.log(BACK_URI)
    const  datos = {
        username: document.getElementById("usernameInput").value,
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value,
    }
        console.log((BACK_URI+"/api/users"))
      return  await fetch((BACK_URI+"/api/users"), {
            method : "POST",
            mode : "cors",
            body:JSON.stringify({
                username: datos.username,
                email: datos.email,
                password: datos.password,
            }) ,headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
            
        })

               
        
    
    
  
}


export {
    createUser
};

