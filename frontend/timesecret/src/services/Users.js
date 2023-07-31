

let uri ="https://temporalsecrets.com/"
if(process.env.NODE_ENV==="development"){
    uri = "http://localhost:3000"
}


async function createUser(data) {


    const datos = {
        username: document.getElementById("usernameInput").value,
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value,
    }
    
    return await fetch(uri + '/api/user', {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            username: datos.username,
            email: datos.email,
            password: datos.password,
        }), headers: {
            "Content-type": "application/json; charset=UTF-8"
        },

    }).then(res => res.json().then(data => {;

        return data
    }))
}
async function userLogin(username) {    
    return await fetch(`${uri}/api/authNotProvider?name=${username}`).then(res => res.json().
    then(data => {
        return data}).catch(err => console.log(err)))
}
async function obteinDataForUser(username) {

    return await fetch(`${uri}/api/authNotProvider?name=${username}`).then(res => res.json().then(data => {
    return data})).catch(err => console.log(err))
    
}


export {
    createUser, obteinDataForUser, userLogin
}

