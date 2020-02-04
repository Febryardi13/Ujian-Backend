const express = require('express')
const BodyParser = require('body-parser')
const Cors = require('cors')

//Create app
const app = express()

//Test Connections Database
const db = require('./connections/mysql')
db.connect(err=>{
    if(err) throw err
    console.log('Database ujian-backend conncected...')
})

//Set Middlewere (req.body)
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:false}))

//Set Cors (Izin akses front-end akses ke back-end)
app.use(Cors())

//Set Routes (setting API backend)
const {storeRouter} = require('./routers')
app.get('/', (req,res) => res.send('<h1>Haii ini ada pesan dari backend</h1>'))
app.use('/store',storeRouter) //baca API dari index.js terluar -> productRouter -> productController

const PORT = process.env.PORT || 2019
app.listen(PORT, console.log(`Port it's running in ${PORT}...`))