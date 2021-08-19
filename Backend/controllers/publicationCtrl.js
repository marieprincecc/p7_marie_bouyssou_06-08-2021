const models = require('../models');
const jwt = require('jsonwebtoken');
const commentaire = require('../models/commentaire');
require('dotenv').config({ path: '../variables.env' });
const tokenKey = process.env.SECRET_KEY;


const regex = /^([A-Za-z0-9\s.])*$/ 

exports.createPublication = (req,res,next) =>{
  const token = req.headers.authorization.split(' ')[1];          //on recupère le token dans les headers
  const decodedToken = jwt.verify(token, tokenKey);                  //on decode le token
  const userId = decodedToken.idUSER;

  let title = req.body.title
  let texte = req.body.texte

  models.User.findOne({
    where: { id: userId }
  })
  .then((User) =>{
    models.Publication.create({
      title  : title,
      texte: texte,
      UserId : User.id
    })
    .then((publication) =>
      res.status(201).json(publication))
    
    .catch(error => res.status(400).json({ error }))
  })
  .catch(() =>{
     res.status(500).json({ 'error': 'unable to verify user' });
 
  
  })
}


exports.getOnePublication = (req,res,next)=>{
  models.Publication.findOne({where:{id:req.params.id},
    
    include:[
      {model:models.Commentaire, where:{PublicationId: req.params.id}}
    ]})                   //recuperation publication avec id
    .then(publication => res.status(200).json(publication))
    .catch(error => res.status(404).json({ error }))
};

exports.getAllPublication = (req,res,next)=>{
 
  let order = req.query.order

  models.Publication.findAll({
    order: [(order!=null)?order.split(':'):['title','ASC']],
    include:[{
      model: models.User,
      attributes: ['firstname', 'lastname']
    }]
  })                   //recuperation publication avec id
 
    .then(publications => res.status(200).json(publications))
    .catch(error => res.status(404).json({ error }))
};

exports.deletePublication = (req, res, next) =>{
  models.Publication.findOne({
    where: { id: req.params.id }
  })
  .then((Publication) =>{
    Publication.destroy({ id: req.params.id },{ truncate: true })
      .then(()=> res.status(201).json({message:'Publication supprimé'}))
      .catch((error)=> res.status(400).json({error}))
      
  })
  .catch(()=> res.status(500).json({ 'error': 'Publication introuvable' }))
  
};
  
