const models = require('../models');
const Publication = models.publication;
const Commentaire = models.commentaire;
const User = models.user;
const jwt = require('jsonwebtoken');
const acces = require('../utils/jwt.utils');
require('dotenv').config({ path: '../variables.env' });
const tokenKey = process.env.SECRET_KEY;


exports.createCommentaire = (req, res) => {
  let token = req.headers.authorization
  if (!token) {

    return res.status(403).json({ message: 'acces refusé' })
  } else {
    const decodedToken = jwt.decode(token, tokenKey);
    const userId = decodedToken.userId;
    let content = req.body.content
    let id = req.body.publicationId
    if (content == '') {
      return res.status(400).json({ message: 'formulaire incomplet' })
    } else {
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

            .catch(error => res.status(500).json({ error }))
        })
        .catch(() => {
          res.status(404).json({ message: 'Publication introuvable' });


        })
    }
  }
}







exports.modifyCommentaire = async (req, res) => {
  let token = req.headers.authorization
  if (!token) {

    return res.status(403).json({ message: 'acces refusé' })
  } else {
    try {
      const userId = acces.decoderTokenUser(req)
      let content = req.body.content
      await Commentaire.findOne({ where: { id: req.params.id } })
        .then((Commentaire) => {
          if (userId === Commentaire.userId) {
            console.log('dans le if' + userId + Commentaire.userId)

            Commentaire.update({
              content: (content ? content : Commentaire.content)
            })
              .then(() => res.status(201).json(Commentaire))
              .catch((error) => res.status(500).json({ error }))
          } else {
            res.status(403).json({ message: "vous n'avez pas les droits" })
          }
        })

    } catch (error) {
      res.status(500).json({ error })
    }
  }
}


exports.getAllCommentaire = (req, res, next) => {
  let token = req.headers.authorization
  if (!token) {

    return res.status(403).json({ message: 'acces refusé' })
  } else {
    Commentaire.findAll({
      where: { PublicationId: req.params.id },
      include: [
        {
          model: User,
          attributes: ['lastname', 'firstname', 'id'],
          required: false
        }
      ]

    })

      .then((Commentaire) => res.status(200).json(Commentaire))
      .catch(error => res.status(404).json({ error }))
  }
}

exports.getOneCommentaire = async (req, res) => {
  let token = req.headers.authorization
  if (!token) {

    return res.status(403).json({ message: 'acces refusé' })
  } else {
    try {
      const userId = acces.decoderTokenUser(req)
      const isAdmin = acces.decoderTokenAdmin(req)
      await Commentaire.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: User,
            attributes: ['lastname', 'firstname'],
            required: false
          }
        ]


      })

        .then((Commentaire) => {
          if (userId === Commentaire.userId || isAdmin === true) {
            res.status(200).json(Commentaire)
          } else {
            res.status(403).json({ message: 'acces refusé' })
          }
        })
        .catch(error => res.status(404).json({ error }))
    } catch (error) {
      res.status(500).json({ error })
    }
  }
}

exports.deleteCommentaire = async (req, res, next) => {
  try {
    const userId = acces.decoderTokenUser(req)
    const isAdmin = acces.decoderTokenAdmin(req)

    await Commentaire.findOne({ where: { id: req.params.id } })
      .then((Commentaire) => {
        if (userId === Commentaire.userId || isAdmin === true) {
          Commentaire.destroy({ id: req.params.id }, { truncate: true })
          res.status(200).json({ message: 'Commentaire supprimé' })
        } else {
          res.status(403).json({ message: "vous n'avez pas les droits" })
        }
      }).catch((error) => res.status(404).json({ error }))
  } catch (error) {
    res.status(500).json({ error })
  }
}