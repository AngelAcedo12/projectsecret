

let uri ="https://temporalsecrets.com/"
if(process.env.NODE_ENV==="development"){
    uri = "http://localhost:3000"
}


const createMNG = async (data) => {

    
    return await fetch(uri+"/api/mensagesGlobales", {

        method:"POST",
        mode:"cors",
        body:JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        
        }

    }).then(res => res.json().then(data => {  return data})).catch(err => {console.log(err); return false})
    
 } 

const incrementLike = async (id,username) => {
 
    return await fetch(uri+`/api/likeMenssages?id=${id}&username=${username}`,{
        method:"PUT",
        mode:"cors",
       
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        },

    }).then(res => res.json().then(data => {return data})).catch(err => {console.log(err); return false})

}
const removeLike = async (id,username) => {
    return await fetch(uri+`/api/likeRemove?id=${id}&username=${username}`,{ 
    method:"PUT",
    mode:"cors",
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    
    },}).then(res => res.json().then(data => {return data})).catch(err => {console.log(err); return false})

}
const obteinAllMessage = async () => {
    return await fetch(uri+"/api/mensagesGlobales").then(res => res.json().then(data => {return data})).catch(err => {console.log(err); return []})

}
const obteinOneMessage = async (id) => {

    return await fetch(uri +`/api/obteinOneMNG?id=${id}`).then(res => res.json().then(data => {return data})).catch(err => {console.log(err); return []})
}
const obteinMessageforUser = async(username) => {

    return await fetch(uri+`/api/obteinMMGforUser?username=${username}`).
    then(res => res.json().then(data => {return data})).catch(err => {console.log(err);return []})
}
export {
    createMNG, incrementLike, obteinAllMessage, obteinMessageforUser, obteinOneMessage, removeLike
}

