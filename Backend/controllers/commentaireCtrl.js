const models = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../variables.env' });
const tokenKey = process.env.SECRET_KEY;

const regex = /^([A-Za-z0-9\s.])*$/ 

exports.createCommentaire = (req,res,next) =>{
  const token = req.headers.authorization.split(' ')[1];          //on recupère le token dans les headers
  const decodedToken = jwt.verify(token, tokenKey);                  //on decode le token
  const idUSER = decodedToken.idUSER;
    let content = req.body.content

  
    models.Publication.findOne({
      where: { id: req.params.id }
    })
    .then((Publication) =>{
      models.Commentaire.create({
        content  : content,
        PublicationId: Publication.id,
        UserId : idUSER
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
  models.Commentaire.findOne({
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

exports.getAllCommentaire = (req,res,next)=>{
  models.Commentaire.findAll({
      include:[{
        model: models.User,
        attributes: ['firstname', 'lastname']
      }
      ]
    })                   
   
      .then(commentaires => res.status(200).json(commentaires))
      .catch(error => res.status(404).json({ error }))
  };
 

exports.deleteCommentaire = (req, res, next) =>{
  models.Commentaire.findOne({
    where: { id: req.params.id }
  })
  .then((Commentaire) =>{
    Commentaire.destroy({ id: req.params.id })
      .then(()=> res.status(201).json({message:'commentaire supprimé'}))
      .catch((error)=> res.status(400).json({error}))
  })
  .catch(()=> res.status(500).json({ 'error': 'commentaire introuvable' }))
  
};
  
