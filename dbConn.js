const mysql = require('mysql2')
const { connObj } = require('./connObj')
class createConn {
    constructor(tablename) {
        this.tablename = tablename
        this.connetion = mysql.createConnection(connObj)
    }
    Connect() {
        this.connetion.Connect((err) => {
            if (err) throw err
            console.log('Connection Done Successful')
        })
    }

    DisConnect() {
        this.connetion.destroy((err) => {
            if (err) throw err
            console.log('Connection Closed Successful')
        })
    }
}

module.exports = createConn








// Older ways
// function createConn() {
//     let connection = mysql.createConnection(connObj)
//     connection.connect(err => {
//         if (err) {
//             throw err
//             console.log('Connection Failed')
//         }
//         else {
//             console.log('Connection Succeded')
//         }
//     })
//     return connection
// }
