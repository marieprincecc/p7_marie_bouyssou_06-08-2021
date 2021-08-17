const models = require('../models');
const jwtUtils = require('../utils/jwt.utils');

const regex = /^([A-Za-z0-9\s.])*$/ 

exports.createCommentaire = (req,res,next) =>{

    //recup params
    let idUSER = req.body.idUSER
    let idPublication = req.body.idPublication
    let content = req.body.content

    if (content == null) {
        return res.status(400).json({'error': 'entrer du texte'});
     };
    if (!regex.test(content)) {
        return res.status(400).json({error});
    }
    const commentaire = new Commentaire({
        idUSER : idUSER,
        idPublication: idPublication,
        content : content
        
    });
      
    commentaire.save()
      .then(() => res.status(201).json({ message: 'Nouveau commentaire enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.getOneCommentaire = (req,res,next)=>{
    commentaire.findOne({where:{id:req.params.id}})                   //recuperation publication avec id
        .then(commentaire => res.status(200).json(commentaire))
        .catch(error => res.status(404).json({ error }))
  };

  exports.getAllCommentaire = (req,res,next)=>{
    commentaire.find()                   //recuperation commentaire avec id
        .then(commentaires => res.status(200).json(commentaires))
        .catch(error => res.status(404).json({ error }))
  };

  exports.deleteCommentaire = (req, res, next) =>{
    commentaire.findOne({where:{id:req.params.id}})                   //recuperation commentaire avec id
    .then(commentaire => {
      commentaire.deleteOne({where:{id:req.params.id}})                   //suppression du commentaire
        .then(() => res.status(200).json({message:'commentaire supprimé!'}))
        .catch( error => res.status(400).json({error}));
      })
  
    .catch(error => res.status(500).json({ error }));
};
  
