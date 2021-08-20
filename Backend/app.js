const express = require('express')    //importation express (facilite la gestion de server)
const bodyParser = require('body-parser')   //importation body-parser (permet de gerer les demande avec json)
const helmet = require('helmet')        //importation helmet securité
const path = require('path')
const mysql = require('mysql')
const app = express()    //const app utilisant express
const appRouter = require('./appRouter').router
const cors = require('cors')



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

  app.use((req, res, next) => {      
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();   //toujours next() pour passer au middelware suivant
  });

  //body-parser config
  app.use(bodyParser.json());     //converti toute les reponse en format utilisable (json)
  app.use(helmet());            //inclu directement helmet a l'app
  app.use(cors())
  app.use('/api/',appRouter)
  

  module.exports = app;