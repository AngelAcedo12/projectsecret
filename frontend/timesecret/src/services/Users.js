
 


async function createUser(data){
     
    
 
    const  datos = {
        username: document.getElementById("usernameInput").value,
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value,
    }
        console.log(("https://temporalsecret1.onrender.com/api/users"))
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

