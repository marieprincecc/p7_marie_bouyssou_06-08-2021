const models = require('../models');

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
  models.commentaire.create({
    idUSER : idUSER,
    idPublication: idPublication,
    content : content
  })
    .then(() => res.status(201).json({ message: 'Nouveau commentaire enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyCommentaire = (req,res,next)=>{
  models.commentaire.findOne({where:{id:req.params.id}})                   //recuperation publication avec id
    .then(commentaire =>
       commentaire.updateOne({where:{id:req.params.id}}, { ...req.body, where:{id:req.params.id}})
        .then(() => res.status(200).json({message:'sauce modifiee'}))
        .catch( error => res.status(400).json({error}))
    )
    .catch(error => res.status(404).json({ error }))
};

exports.getAllCommentaire = (req,res,next)=>{
  models.commentaire.find()                   //recuperation commentaire avec id
    .then(commentaires => res.status(200).json(commentaires))
    .catch(error => res.status(404).json({ error }))
};

exports.deleteCommentaire = (req, res, next) =>{
  models.commentaire.findOne({where:{id:req.params.id}})                   //recuperation commentaire avec id
    .then(commentaire => {
      commentaire.deleteOne({where:{id:req.params.id}})                   //suppression du commentaire
        .then(() => res.status(200).json({message:'commentaire supprimé!'}))
        .catch( error => res.status(400).json({error}));
    })
    .catch(error => res.status(500).json({ error }));
};
  
