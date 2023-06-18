const Joi = require('joi');
class Schema {
    static user() {
        return Joi.object({
            username: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email().required()
        });
    }
    static cart() {
        return Joi.object({
            userid: Joi.number().min(1001).max(9999).required(),
            username: Joi.string().required(),
            product: Joi.string().required(),
            quantity: Joi.number().min(1).max(3).required(),
            price: Joi.number().required()
        });
    }
}
module.exports = Schema