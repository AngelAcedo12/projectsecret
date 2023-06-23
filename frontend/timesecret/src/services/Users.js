

const uri = "https://temporalsecret1.onrender.com"
const local = "http://localhost:3004"

async function createUser(data) {


    const datos = {
        username: document.getElementById("usernameInput").value,
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value,
    }
    
    return await fetch(uri + '/api/users', {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            username: datos.username,
            email: datos.email,
            password: datos.password,
        }), headers: {
            "Content-type": "application/json; charset=UTF-8"
        },

    }).then(res => res.json().then(data => {

        return data
    }))






}
async function userLogin(username) {

    

    
    return await fetch(`${uri}/api/users/${username}`).then(res => res.json().
    then(data => {return data}).catch(err => console.log(err)))


}


export {
    createUser,
    userLogin
}

