import bcry from "bcryptjs";
function comparePassword(password, passwordEncrypted){

    const resultCompare = bcry.compare(password, passwordEncrypted, (err,result) => {
        if (err){
            console.log(err)
        }else{
            
            return result
        }
    })
    return resultCompare;
}
export {
    comparePassword
};
