const jwt = require('jsonwebtoken');
const models = require('../models');
const Publication = models.publication;
const Commentaire = models.commentaire;
const User = models.user;
const acces = require('../utils/jwt.utils');
require('dotenv').config({ path: '../variables.env' });
const tokenKey = process.env.SECRET_KEY;



exports.createPublication = (req, res, next) => {
  let token = req.headers.token      
if (token!= null) {
  
}
  const decodedToken = jwt.decode(token, tokenKey);
  //on decode le token
  const userId = decodedToken.userId;

  let title = req.body.title
  let texte = req.body.texte

  const newPublication = {
    title: title,
    texte: texte,
    userId: userId
  };
  Publication.create(newPublication)
    .then(function () {
      res.status(201).json({ message: 'Nouvelle publication créée' });
    })


    .catch(error => res.status(400).json({ error }))

}


exports.getOnePublication = async (req, res, next) => {
  

    await Publication.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['lastname', 'firstname'],
          required: false
        }
      ]
    })

      .then((Publication) => res.status(200).json(Publication))
      .catch(error => res.status(404).json({ error }))
 

}




//recuperation publication avec id


exports.getAllPublication = async (req, res, next) => {

 


    await Publication.findAll({
      include: [
        {
          model: User,
          attributes: ['lastname', 'firstname'],
          required: false
        }
      ]
    })

      .then((Publications) => res.status(200).json(Publications))
      .catch(error => res.status(404).json({ error }))
  }

exports.getPublicationProfil = (req, res, next) => {
 
  Publication.findAll({
    where: { userId: req.params.id },
    

  })

    .then((Publication) => res.status(200).json(Publication))
    .catch(error => res.status(404).json({ error }))
};


exports.deletePublication = async(req, res) => {
  try{
    const userId = acces.decoderTokenUser(req)
    const isAdmin = acces.decoderTokenAdmin(req)
    
     await Publication.findOne({where: { id: req.params.id } })
      .then((Publication) => {  
    if(userId===Publication.userId || isAdmin === true){
      Publication.destroy({ id: req.params.id }, { truncate: true })
      res.status(200).json({ message: 'Publication supprimé' })
    }else{
      res.status(400).json({ message:"vous n'avez pas les droits" })
    }
  }).catch((error) => res.status(404).json({ error }))
  }catch(error){
    res.status(500).json({ error })
  }
}
