/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    env:{
        DB_URI : "mongodb+srv://angelacedomelli:VXhXcX7F9m9LMluA@temporalsecrets.snpzrpl.mongodb.net/temporalsecrets?retryWrites=true&w=majority",
        API_URI: "https://temporalsecrets-mocha.vercel.app/",
        BACK_URI : "https://temporalsecret1.onrender.com",
        SECRET: "papapapapapapapapapapapapapapapapap",
        clientIdGoogle: "100454031756-ub5qob3ik15bkto20ksl6j6q6b58ofdv.apps.googleusercontent.com",
        secretGoogle:"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",
    }
  
}
