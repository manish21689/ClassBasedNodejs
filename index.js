const {dbHelper} =require('./dbHelper')
const App = require('./server')
const app = new App()
app.start(4000)

// dbHelper.getAll('cart',(err,res)=>{
// console.log('Response from Dbhelper',res)    
// })

// dbHelper.getByUserid('cart',1001,(err,res)=>{
// console.log('Result By id',res)    
// })
