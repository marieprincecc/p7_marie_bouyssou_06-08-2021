const express = require('express')    //importation express (facilite la gestion de server)
const bodyParser = require('body-parser')   //importation body-parser (permet de gerer les demande avec json)
const helmet = require('helmet')        //importation helmet securité
const path = require('path')
const app = express()                           //const app utilisant express