const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const userRoute = require('./router/user')
app.use('/api/users',userRoute)
/*mongoose.connect(process.env.DATABASE)
.then(() => console.log("data base connected"))
.catch(() => console.log('database not connected'))
*/



//kkkkk
























const port = process.env.PORT || 5000
app.listen(port,() => console.log("port run in port",port))


