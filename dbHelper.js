const getConnection = require('./dbConn')
class dbHelper {
    constructor(connection) {
        this.connection = connection
    }

    static executeQuery(query, callback) {
        let DB = new this(getConnection())
        DB.connection.query(query, (error, result) => {
            if (error) {
                callback(error, null)
            }
            else {
                callback(null, result)
            }
        })
    }

    static getAll(tablename,callback ) {
        let sql = `select * from ${tablename}`
        return this.executeQuery(sql, callback)
    }

    static getByUserid(tablename, id, callback) {
        let sql = `select * from ${tablename} where userid=${id}`
        return this.executeQuery(sql, callback)
    }

}
module.exports = { dbHelper }

