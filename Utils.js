const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class Helper {
    static async hashSync(data) {
        try {
            const saltRounds = 10;
            const hash = await bcrypt.hash(data, saltRounds);
            return hash;
        } catch (error) {
            throw new Error('Error while hashing data');
        }
    }
    static async compareSync(data, hash) {
        try {
            const isMatch = await bcrypt.compare(data, hash);
            return isMatch;
        } catch (error) {
            throw new Error('Error while comparing data');
        }
    }
    static createToken(payload, secret, expiresIn) {
        try {
            const token = jwt.sign(payload, secret, { expiresIn });
            return token;
        } catch (error) {
            throw new Error('Error while creating JWT token');
        }
    }
    static Paginate(tableName,params){
        if (Number(params.page) > 0 && Number(params.pages) > 0) {
            const { page, pages } = params
            const skip = (Number(page) - 1) * Number(pages)
            var sql = `select * from ${tableName}  limit ${Number(pages)} offset ${Number(skip)}`
              }
        else {
            var sql = `select * from ${tableName}`
            
        }
       return sql
    }
}
module.exports=Helper