
 


async function createUser(data){
    const {username, password,email } = data;
   
    const postUser = async function (){
     console.log(username,password,email);
        await fetch(`http://localhost:3001/api/users`, {
            method : "POST",
            mode : "cors",
            body:JSON.stringify({
                username: username,
                email: email,
                password: password,
            }) ,headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
            
        }).then(res => {
            console.log(res.json());
        }).catch(err=> console.log(err));
    }
    await postUser();
}


export {
    createUser
};

