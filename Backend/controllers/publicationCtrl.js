const models = require('../models');
const jwtUtils = require('../utils/jwt.utils');

const regex = /^([A-Za-z0-9\s.])*$/ 

exports.createPublication = (req,res,next) =>{

    //recup params
    let idUSER = req.body.idUSER
    let title = req.body.title
    let texte = req.body.texte
    let media = req.body.media

    if (title == null || texte == null || idUSER == null ) {
        return res.status(400).json({'error': 'incomplet'});
     };
     if (!regex.test(title) ||!regex.test(texte)  ) {
        return res.status(400).json({error});
    }
    const publication = new Publication({
        idUSER : idUSER,
        title : title,
        texte : texte,
        media : media
    });
      
    publication.save()
      .then(() => res.status(201).json({ message: 'Nouvelle publication enregistrée !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.getOnePublication = (req,res,next)=>{
    publication.findOne({where:{id:req.params.id}})                   //recuperation publication avec id
        .then(publication => res.status(200).json(publication))
        .catch(error => res.status(404).json({ error }))
  };

  exports.getAllPublication = (req,res,next)=>{
    publication.find()                   //recuperation publication avec id
        .then(publications => res.status(200).json(publications))
        .catch(error => res.status(404).json({ error }))
  };

  exports.deletePublication = (req, res, next) =>{
    publication.findOne({where:{id:req.params.id}})                   //recuperation publication avec id
    .then(publication => {
      publication.deleteOne({where:{id:req.params.id}})                   //suppression de la publication
        .then(() => res.status(200).json({message:'publication supprimé!'}))
        .catch( error => res.status(400).json({error}));
      })
  
    .catch(error => res.status(500).json({ error }));
};
  
