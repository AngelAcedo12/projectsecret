
 


async function createUser(data){
     
    
    const  datos = {
        username: document.getElementById("usernameInput").value,
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value,
    }

      return  await fetch(`http://localhost:3001/api/users`, {
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

