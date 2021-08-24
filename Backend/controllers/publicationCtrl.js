const jwt = require('jsonwebtoken');
const models = require('../models');
const Publication = models.publication;
const Commentaire = models.commentaire;
const User = models.user;
const acces = require('../utils/jwt.utils');
const order = acces.decoderToken;
const admin = acces.decoderTokenAdmin;
require('dotenv').config({ path: '../variables.env' });
const tokenKey = process.env.SECRET_KEY;


const regex = /^([A-Za-z0-9\s.])*$/ 

exports.createPublication = (req,res,next) =>{
  let token = req.body.token      //on recupère le token dans les headers
  console.log(req.body)
  const decodedToken = jwt.decode(token, tokenKey); 
  console.log(decodedToken)                 //on decode le token
  const userId = decodedToken.userId;
console.log(userId)
  let title = req.body.title
  let texte = req.body.texte

  const newPublication = {
    title  : title,
    texte: texte,
    userId : userId
};
Publication.create(newPublication)
.then(function() {
    res.status(201).json({ message: 'Nouvelle publication créée' });
})
   
    
    .catch(error => res.status(400).json({ error }))
  
}


exports.getOnePublication =async (req,res,next)=>{
  let acces=false
 let id = req.body.id
 let token = req.body.token
 console.log (req.body)
order(token)
admin(token)
if (acces=true) {
  console.log('true')
  Publication.findOne({
    where: { id: req.params.id },

  })
 
  .then((Publication) => res.status(200).json(Publication))
  .catch(error => res.status(404).json({ error }))
  }else{(console.log('false')), window.location='http://localhost:8080/login'}

}
    
    
    
    
                      //recuperation publication avec id
   

exports.getAllPublication = (req,res,next)=>{
 console.log(req.body)
  let acces=false
  order(req)
  admin(req)
  if (acces=true) {
    console.log('true')
  
  Publication.findAll()
 
    .then((Publications) => res.status(200).json(Publications))
    .catch(error => res.status(404).json({ error }))
  }else{(console.log('false')), window.location='http://localhost:8080/login'}
};

exports.deletePublication = (req, res, next) =>{
  Publication.findOne({
    where: { id: req.params.id },

  })
  .then((Publication) =>{
    let acces=false
  order(req)
  admin(req)
  if (acces=true) {
    Publication.destroy({ id: req.params.id },{ truncate: true })
      .then(()=> res.status(201).json({message:'Publication supprimé'}))
      .catch((error)=> res.status(400).json({error}))
  }
  })
  .catch(()=> res.status(500).json({ 'error': 'Publication introuvable' }))
  
};
  
