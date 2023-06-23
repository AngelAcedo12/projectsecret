import bcry from "bcryptjs";
async  function comparePassword(password, passwordEncrypted){

    const resultCompare = await bcry.compareSync(password, passwordEncrypted, (err,result) => {
        if (err){
            console.log(err)
        }else{
            console.log(result)
            return result
        }
    })
    return resultCompare;
}
export {
    comparePassword
};
