import bcry from "bcryptjs";
async function encryptPassword(password){

    const rondasSal = 10;
    bcry.hashSync(password,rondasSal, (err,passwordEncrypted) => {
        if  (err) {
            console.log(err)
            return false;
        }else{
           
            console.log(passwordEncrypted);
            return respuesta;
        }

    })


}

export {
    encryptPassword
};
