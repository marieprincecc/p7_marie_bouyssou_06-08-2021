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

exports.createCommentaire = (req, res, next) => {
  let token = req.body.token      //on recupère le token dans les headers
 
  const decodedToken = jwt.decode(token, tokenKey);
                //on decode le token
  const userId = decodedToken.userId;

  let content = req.body.content
  let id = req.body.publicationId

  Publication.findOne({
    where: { id: id },

  })
    .then((Publication) => {
      Commentaire.create({
        content: content,
        publicationId: Publication.id,
        userId: userId
      })
        .then((Commentaire) =>
          res.status(201).json(Commentaire))

        .catch(error => res.status(400).json({ error }))
    })
    .catch(() => {
      res.status(500).json({ 'error': 'Publication introuvable' });


    })
}







exports.modifyCommentaire = (req, res, next) => {
  // Params
  let content = req.body.content;
  let acces = false
  order(req)

  if (acces = true) {
    Commentaire.findOne({
      attributes: ['id', 'content'],
      where: { id: req.params.id }
    })
      .then((Commentaire) => {
        Commentaire.update({
          content: (content ? content : Commentaire.content)
        })
          .then(() => res.status(201).json(Commentaire))
          .catch((error) => res.status(400).json({ error }))
      })
      .catch(() => res.status(500).json({ 'error': 'commentaire introuvable' }))
  }
}

exports.getAllCommentaire = (req, res, next) => {
 
  Commentaire.findAll({
    where: { PublicationId: req.params.id },
    include: [
      {
        model: User,
        attributes: ['lastname', 'firstname'],
        required: false
      }
    ]

  })

    .then((Commentaire) => res.status(200).json(Commentaire))
    .catch(error => res.status(404).json({ error }))
};

exports.getOneCommentaire = async (req, res, next) => {
  let acces = false
  let token = req.body.token
  order(token)
  admin(token)
  if (acces = true) {
    console.log('true')
    Commentaire.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['lastname', 'firstname'],
          required: false
        }
      ]


    })

      .then((Commentaire) => res.status(200).json(Commentaire))
      .catch(error => res.status(404).json({ error }))
  } else { (console.log('false')), window.location = 'http://localhost:8080/login' }

}

exports.deleteCommentaire = async(req, res, next) => {
try{
  const userId = acces.decoderTokenUser(req)
  const isAdmin = acces.decoderTokenAdmin(req)
  
   await Commentaire.findOne({where: { id: req.params.id } })
    .then((Commentaire) => {  
  if(userId===Commentaire.userId || isAdmin === true){
    Commentaire.destroy({ id: req.params.id }, { truncate: true })
    res.status(200).json({ message: 'Commentaire supprimé' })
  }else{
    res.status(400).json({ message:"vous n'avez pas les droits" })
  }
}).catch((error) => res.status(404).json({ error }))
}catch(error){
  res.status(500).json({ error })
}
}