const express = require('express')
const BodyParser = require('body-parser')
const Cors = require('cors')

//Create app
const app = express()

const PORT = process.env.PORT || 2019

//Test Connections Database
const db = require('./connections/mysql')
db.connect(err=>{
    if(err) throw err
    console.log('Database ujian-backend conncected...')
})
//Set Cors (Izin akses front-end akses ke back-end)
app.use(Cors())
//Set Middlewere (req.body)
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:false}))


app.get('/', (req,res) => res.send('<h1>Ini Home Page</h1>'))// buat belajar skip aja kak dinooooo
//Set Routes (setting API backend)
const {storeRouter, movieRouter, cateRouter, movcatRouter} = require('./routers')
app.use('/store',storeRouter) //baca API dari index.js terluar -> productRouter -> productController (BUAT BELAJAR KAK DINO. SKIPPP AJAAAA)
app.use('/movie',movieRouter)
app.use('/catemovie',cateRouter)
app.use('/movcat',movcatRouter)


app.listen(PORT, console.log(`Port it's running in ${PORT}...`))