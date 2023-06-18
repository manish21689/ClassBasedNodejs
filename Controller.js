const { Repo } = require('./Repository')
const ResponseHandler = require('./responseHandler');
var repo = new Repo('cart') 
class Controller {
    constructor() {
        this.fired()
    }

    fired() {
        const user = {
            name: 'mkv',
            city: 'lko',
            age: 42
        }
        let tableName = 'Dummy'
        let keys = Object.keys(user).join(',')
        let value = Object.values(user).map((e) => typeof (e) == 'string' ? `'${e}'` : e).join(',')
        let inssql = `Insert into ${tableName} (${keys}) values(${value})`
        let updatesql = `update ${tableName} set ` + Object.entries(user).map(([key, value]) =>
        typeof value === 'string' ? `${key} = '${value}'` : `${key} = ${value}`);
        console.log(inssql)
        console.log(updatesql)
    }

    async getAll(req, res) {
        console.log(req.params,req.query,req.method, req.headers.host, req.path, req.path.split('/')[1])
        try {
            let [result, err] = await repo.getAll(req.query)
            if (err) return ResponseHandler.error(res, err)

            return ResponseHandler.success(res, result)
        } catch (error) {
            console.log("Some Error Caught", error)
        }
    }

    async getById(req, res) {
        console.log(req.method, req.headers.host, req.path, req.path.split('/')[1])
        console.log(req.url, req.host)
        try {
            let [result, err] = await repo.getById(req.params.id)
            if (err) return ResponseHandler.error(res, err)
            return ResponseHandler.success(res, result)
        } catch (error) {
            console.log("Some Error Caught", error)
        }
    }
    async getByFilter(req, res) {
        try {
            let [result, err] = await repo.getByFilter(req.query)
            if (err) return ResponseHandler.error(res, err)

            return ResponseHandler.success(res, result)
        } catch (error) {
            console.log('Some Error Occured')

        }
    }
    async create(req, res) {
        try {
            let [result, err] = await repo.create(req.body)
            if (err) return ResponseHandler.error(res, err)
            return ResponseHandler.success(res, result)
        } catch (error) {
            console.log('Some Error Occured create in controller')
        }
    }

    async register(req, res) {
        try {

            let [result, err] = await repo.register(req.body)
            if (err) return ResponseHandler.error(res, err)
            return ResponseHandler.success(res, result)
        } catch (error) {
            console.log('Some Error Occured register controllter', error)

        }
    }
}
module.exports = { Controller }
/* Controller.prototype.getById = async function (req, res) {
    try {
        let [result, err] = await repo.getById(req.params.id)
        if (err) return res.status(500).json({ msg: 'Error in Fetching...' })
        res.status(200).json(result)

    } catch (error) {
        console.log("Some Error Caught", error)
    }

}
 */
/* let updatesql=`update ${tableName} set `+Object.entries(user).map(([key, value]) => {
            if (typeof value === 'string') {
              return `${key} = '${value}'`;
            } else {
              return `${key} = ${value}`;
            }
          }); */