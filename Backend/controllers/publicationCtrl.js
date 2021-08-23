const jwt = require('jsonwebtoken');
const models = require('../models');
const Publication = models.publication;
const Commentaire = models.commentaire;
const User = models.user;
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

 
    Publication.create({
      title  : title,
      texte: texte,
      userId : userId
    })
    .then((publication) =>
      res.status(201).json(publication))
    
    .catch(error => res.status(400).json({ error }))
  
}


exports.getOnePublication = (req,res,next)=>{
  Publication.findOne({where:{id:req.params.id},
    
    include:[
      {model:Commentaire, where:{PublicationId: req.params.id},include:[{
        model: User,
        attributes: ['firstname', 'lastname']
      }
      ],required:false},
      { model: User,
        attributes: ['firstname', 'lastname']}
  
    
    
    ]})                   //recuperation publication avec id
    .then(publication => res.status(200).json(publication))
    .catch(error => res.status(404).json({ error }))
};

exports.getAllPublication = (req,res,next)=>{
  console.log(req.body)
  Publication.findAll()
 
    .then(() => res.status(200).json('ok'))
    .catch(error => res.status(404).json({ error }))
   
};

exports.deletePublication = (req, res, next) =>{
  Publication.findOne({
    where: { id: req.params.id },

  })
  .then((Publication) =>{
    Publication.destroy({ id: req.params.id },{ truncate: true })
      .then(()=> res.status(201).json({message:'Publication supprimé'}))
      .catch((error)=> res.status(400).json({error}))
      
  })
  .catch(()=> res.status(500).json({ 'error': 'Publication introuvable' }))
  
};
  
