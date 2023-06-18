//const Schema = require('./schema');
const express = require('express')
const Middleware = require('./middleware');
const { ObjectSchema } = require("./schemaObj")
const { Controller } = require('./Controller')
let controller = new Controller()

class Router {
    static getRouter() {
        const router = express.Router()
        router.get('/', controller.getAll)
        router.post('/', Middleware.schemeValidate(ObjectSchema.CART),controller.create)
        router.get('/filter', controller.getByFilter)
        router.post('/api/register', controller.register)
        router.get('/id/:id', controller.getById)
    return router
    }
}
module.exports = Router

//router.post('/',Middleware.schemeValidate(Schema.cart()) ,controller.create)

