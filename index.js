const express = require ('express')
const mysql = require ('mysql2/promise')
const path = require ('path')
const port = 3000
const hbs = require ('hbs')
require ('events').EventEmitter.defaultMaxListeners = 15;

dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const db = require ('./db')
const app = express()
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'views'))
app.use('/',require('./routes/login'))
app.use('/auth',require('./routes/auth'))

app.listen(port,()=>{
  console.log('server is woking on http://localhost:3000');
  
})