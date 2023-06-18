const dotenv = require('dotenv')
dotenv.config()
const connObj = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DB,
}
module.exports={connObj}