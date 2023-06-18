const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mysql = require('mysql2')
const Crouter = require('./Route')
class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }
    middlewares() {
        this.app.use(cors())
        this.app.use(bodyparser.json())
        this.app.use(express.json())
        this.app.use(bodyparser.urlencoded({ extended: true }))
    }
    routes() {
        this.app.use('/', Crouter.getRouter())
    }
    start(port) {
        this.app.listen(port, (err) => {
            if (err) throw err
            console.log(`Server is Running at Port ${port}`)
        })
    }
}
module.exports = App
