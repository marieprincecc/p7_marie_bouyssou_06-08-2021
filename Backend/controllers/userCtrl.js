const bcrypt = require('bcrypt');
const models = require('../models');
const jwtUtils = require('../utils/jwt.utils');

//regexs
const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;      

exports.register = (req,res) => {

    //recup params
    let mail = req.body.mail;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let password = req.body.password;
   
    if (mail == null || firstname == null || lastname == null || password == null) {
       return res.status(400).json({'error': 'paramètres manquant'});
    };

    //verification des données(regex etc)
    if (!EMAIL_REGEX.test(mail)) {
        return res.status(400).json({ 'error': 'email is not valid' });
    }

    if (!PASSWORD_REGEX.test(password)) {
        return res.status(400).json({ 'error': 'password invalid (longueur 4 - 8 et doit inclure 1 nombre)' });
    }
 
    models.User.findOne({where:{mail:mail}})
        .then(User =>{
            if (User==null) {
                bcrypt.hash(password,10)
                    .then(hash => {
                        const newUser = models.User.create({
                            mail : mail,
                            firstname : firstname,
                            lastname : lastname,
                            password : hash,
                            isAdmin : 0
                        })
                            .then((newUser) => {
                                return res.status(201).json({'idUSER':newUser.id})
                            })
                            .catch(error => res.status(500).json({ error }));
                    })

                    .catch(error => res.status(500).json({ 'error':'erreur serveur' }))
            }else {
                return res.status(409).json({ 'error': 'user already exist' });
            }
        })
        .catch(function(err) {
            return res.status(500).json({ 'error': 'unable to verify user' });
        });
}

exports.login = (req,res) => {
      
    //recup params
    let mail = req.body.mail;
    let password = req.body.password;

    if (mail == null || password == null){
        return res.status(400).json({'error': 'paramètres manquant'});
    }
    models.User.findOne({where:{mail:mail}})
        .then(User =>{
            if (User) {
                bcrypt.compare(password,User.password)
                .then(valid => {
                    if (!valid) {                     //si mdp incorrect
                      return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }else{
                        res.status(200).json({            //si mot de passe correct on renvoi la reponse attendu
                            idUSER: User.id,
                            token: jwtUtils.genererToken(User)              //durée de validité du token
                        });
                    }
                })
                .catch(error => res.status(500).json({ error }));
            }else{
                return res.status(400).json({error:"utilisateur inconnu"})
            }
        })
        .catch(error => res.status(500).json({ error }));
    
}

exports.getOneProfil = (req, res, next) => {  
    let idProfil = req.params.id
    models.User.findOne({ where:{ id: idProfil} })
      .then(User => res.status(200).json(User))
      .catch(error => res.status(404).json({ error }))
  };

  exports.deleteUser= (req, res, next) =>{
    User.findOne({where:{id:req.params.id}})                   //recuperation User avec id
    .then(User => {
      User.deleteOne({where:{id:req.params.id}})                   //suppression du User
        .then(() => res.status(200).json({message:'User supprimé!'}))
        .catch( error => res.status(400).json({error}));
      })
  
    .catch(error => res.status(500).json({ error }));
};