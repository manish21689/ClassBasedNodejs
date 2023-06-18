var createConn = require('./dbConn')
const MySqlConn= new createConn()
const Helper = require('./Utils');
class Repo {
    constructor(tableName) {
        this.tableName = tableName
        //this.connection = createConn()
        this.connection = MySqlConn.connetion
    }
    async getAll(params) {
        try {
            let vsql = Helper.Paginate(this.tableName, params)
            let result = await this.connection.promise().query(vsql)
            return [result[0], null]
        } catch (error) {
            console.log('Some Error Occured')
            return [null, error]
        }
    }
    async getById(id) {
        try {
            let sql = `select * from ${this.tableName} where userid = ?`
            let result = await this.connection.promise().query(sql, [id])
            return [result[0], null]
        } catch (error) {
            console.log('Some Error Occured in geyById')
            return [null, error]
        }
    }

    async getByFilter(criteria) {
        try {
            let flds = Object.keys(criteria).map((fld) => fld + "=?").join(' AND ')
            let toBeupdate = Object.values(criteria)
            let sql = `select * from ${this.tableName} where ${flds}`
            let result = await this.connection.promise().query(sql, toBeupdate)
            return [result[0], null]
        } catch (error) {
            console.log('Some Error Occured')
            return [null, error]
        }
    }

    async create(newItem) {
        try {
            let sql = `insert into  ${this.tableName}  set ?`
            let result = await this.connection.promise().query(sql, newItem)
            console.log(result)
            return [result[0], null]
        } catch (error) {
            console.log('Some Error Occured in Create', error)
            return [null, error]
        }
    }

        async register(obj) {
        try {
            this.tableName = 'users'
            var [res, err] = await this.getById(obj.userid)
            if (err) return [null, err]
            if (res[0]) return ['Record Alreay Exist', null]
            const hashedPassword = await Helper.hashSync(obj.password);
            obj.password = hashedPassword
            var [res, err] = await this.create(obj)
            if (err) return [null, err]
            return ["User created successfully.", null]
        } catch (error) {
            console.error(error);
            return [null, error]
        }

        /* async login(email, password) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return { error: 'Invalid credentials' };
            }
            const isMatch = await Helper.compareSync(password, user.password);
            if (!isMatch) {
                return { error: 'Invalid credentials' };
            }
            const token = Helper.createToken({ userId: user.id }, 'DINCHIK', '1h');
            return { token };
        } catch (error) {
            console.error(error);
            return { error: 'An error occurred during login' };
        }
    } */
    }
}

module.exports = { Repo }