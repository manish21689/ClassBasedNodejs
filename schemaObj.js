const SchemaObj = require('./schema')
let ObjectSchema = {
    CART: SchemaObj.cart(),
    USER: SchemaObj.user()
}
module.exports = { ObjectSchema }