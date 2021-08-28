
const models = require('../models');
const Publication = models.publication;
const User = models.user;
const acces = require('../utils/jwt.utils');




exports.createPublication = async (req, res) => {
  let token = req.headers.authorization
  if (!token) {

    return res.status(403).json({ message: 'acces refusé' })
  } else {
  try {
    const userId = acces.decoderTokenUser(req)
      let title = req.body.title
      let texte = req.body.texte
      if (title == '' || texte == '') {
        return res.status(400).json({ message: 'formulaire incomplet' })
      } else {
        const newPublication = {
          title: title,
          texte: texte,
          userId: userId
        };
        await Publication.create(newPublication)
          .then(function () {
            res.status(201).json({ message: 'Nouvelle publication créée' });
          })


          .catch(error => res.status(500).json({ error }))
      }
    
    
  

  } catch (error) { res.status(500).json({ error }) }
}
}


exports.getOnePublication = async (req, res, next) => {
  let token = req.headers.authorization
  if (!token) {

    return res.status(403).json({ message: 'acces refusé' })
  } else {
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
}




//recuperation publication avec id


exports.getAllPublication = (req, res) => {
  let token = req.headers.authorization
  if (!token) {

    return res.status(403).json({ message: 'acces refusé' })
  } else {
    Publication.findAll({
      include: [
        {
          model: User,
          attributes: ['lastname', 'firstname', 'id'],
          required: false
        }
      ]
    })

      .then((Publications) => res.status(200).json(Publications))
      .catch(error => res.status(404).json({ error }))
  }
}

exports.getPublicationProfil = async (req, res) => {
  let token = req.headers.authorization
  if (!token) {

    return res.status(403).json({ message: 'acces refusé' })
  } else {
  try {
    await Publication.findAll({ where: { userId: req.params.id } })
      .then((Publication) => {
        const userId = acces.decoderTokenUser(req)
        const isAdmin = acces.decoderTokenAdmin(req)
        if (userId === userId || isAdmin === true) {
          res.status(200).json(Publication)
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


exports.deletePublication = async (req, res) => {
  try {
    const userId = acces.decoderTokenUser(req)
    const isAdmin = acces.decoderTokenAdmin(req)

    await Publication.findOne({ where: { id: req.params.id } })
      .then((Publication) => {
        if (userId === Publication.userId || isAdmin === true) {
          Publication.destroy({ id: req.params.id }, { truncate: true })
          res.status(200).json({ message: 'Publication supprimé' })
        } else {
          res.status(403).json({ message: "vous n'avez pas les droits" })
        }
      }).catch((error) => res.status(404).json({ error }))
  } catch (error) {
    res.status(500).json({ error })
  }
}
