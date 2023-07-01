import { obteinDataForUser } from "@/services/Users"

const dataForUser = async (username)=>{


    return await obteinDataForUser(username).then(res => {
      
        return res 
    })

}

export {
    dataForUser
}
