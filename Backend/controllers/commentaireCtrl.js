const models = require('../models');
const Publication = models.publication;
const Commentaire = models.commentaire;
const User = models.user;
const jwt = require('jsonwebtoken');
const acces = require('../utils/jwt.utils');
const order = acces.decoderToken;
const admin = acces.decoderTokenAdmin;
require('dotenv').config({ path: '../variables.env' });
const tokenKey = process.env.SECRET_KEY;

const regex = /^([A-Za-z0-9\s.])*$/ 

exports.createCommentaire = (req,res,next) =>{
  let token = req.body.token      //on recupère le token dans les headers
  console.log(req.body)
  const decodedToken = jwt.decode(token, tokenKey); 
  console.log(decodedToken)                 //on decode le token
  const userId = decodedToken.userId;
     
  let content = req.body.content
  let id = req.body.publicationId
  
    Publication.findOne({
      where: { id: id }
    })
    .then((Publication) =>{
      Commentaire.create({
        content  : content,
        publicationId: Publication.id,
        userId : userId
      })
      .then((Commentaire) =>
        res.status(201).json(Commentaire))
      
      .catch(error => res.status(400).json({ error }))
    })
    .catch(() =>{
       res.status(500).json({ 'error': 'Publication introuvable' });
   
    
    })
  }
   
  
  
  
 
  

exports.modifyCommentaire = (req,res,next)=>{
// Params
  let content = req.body.content;
  let acces=false
  order(req)
 
  if (acces=true) {
  Commentaire.findOne({
    attributes: ['id', 'content'],
    where: { id: req.params.id }
  })
  .then((Commentaire) =>{
    Commentaire.update({
      content: (content ? content : Commentaire.content)
    })
      .then(()=> res.status(201).json(Commentaire))
      .catch((error)=> res.status(400).json({error}))
  })
  .catch(()=> res.status(500).json({ 'error': 'commentaire introuvable' }))
}
}

exports.getAllCommentaire = (req,res,next)=>{
  console.log('est ce que je suis dans le get all com')
  Commentaire.findAll()                   
   
      .then((Commentaires) => res.status(200).json(Commentaires))
      .catch(error => res.status(404).json({ error }))
  };
 

exports.deleteCommentaire = (req, res, next) =>{
  Commentaire.findOne({
    where: { id: req.params.id }
  })
  .then((Commentaire) =>{
    let acces=false
  order(req)
  admin(req)
  if (acces=true) {
    Commentaire.destroy({ id: req.params.id })
      .then(()=> res.status(201).json({message:'commentaire supprimé'}))
      .catch((error)=> res.status(400).json({error}))
  }
  })
  .catch(()=> res.status(500).json({ 'error': 'commentaire introuvable' }))
  
};
  
