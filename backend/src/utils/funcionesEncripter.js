import bcry from "bcryptjs";
async function encryptPassword(password){

    const rondasSal = 10;

    const hasedPass =  bcry.hashSync(password,rondasSal, (err,passwordEncrypted) => {
        if  (err) {
            console.log(err)
            return false;
        }else{
            let password=passwordEncrypted
            return password;
        }

    })
    return hasedPass

}

async function comparePassword(password, passwordEncrypted){

    const resultCompare = bcry.compareSync(password, passwordEncrypted, (err,result) => {
        if (err){
            console.log(err)
        }else{
            
            return result
        }
    })
    return resultCompare;
}

export {
    comparePassword, encryptPassword
};

