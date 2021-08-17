const express = require('express')    //importation express (facilite la gestion de server)
const bodyParser = require('body-parser')   //importation body-parser (permet de gerer les demande avec json)
const helmet = require('helmet')        //importation helmet securité
const path = require('path')
const mysql = require('mysql')
const app = express()    //const app utilisant express
const appRouter = require('./appRouter').router
//body-parser config
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
require('dotenv').config({ path: './variables.env' })

const db = mysql.createConnection({

    host: process.env.DB_HOST,
 
    user: process.env.DB_USER,
 
    password: process.env.DB_PASS
 
  });

  db.connect(function(err) {
    if (err){ throw err}else
    {console.log("Connecté à la base de données MySQL!")};
  });

  app.use('/api/',appRouter)

  module.exports = app;