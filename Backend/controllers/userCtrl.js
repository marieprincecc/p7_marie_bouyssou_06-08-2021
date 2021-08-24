const bcrypt = require('bcrypt');
const models = require('../models');
const User = models.user;
const jwtUtils = require('../utils/jwt.utils');

const order = jwtUtils.decoderToken;
const admin = jwtUtils.decoderTokenAdmin;
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './variables.env' });
const tokenKey = process.env.SECRET_KEY;



//regexs
const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;      

exports.signup = (req,res,next) => {
  
    

    //verification des données(regex etc)
    if (EMAIL_REGEX.test(req.body.mail)) {
       console.log('mail ok')
        
    }else{res.status(400).json({ 'message': 'mail is not valid' });}

    if (PASSWORD_REGEX.test(req.body.password)) {
       
        console.log('password ok')
    }else{return res.status(400).json({ 'error': 'password invalid (longueur 4 - 8 et doit inclure 1 nombre)' })};
    
     let password = req.body.password;
                
                bcrypt.hash(password,10)
                    .then(hash => {
                        console.log('on est dans le then du hash')
                        const newUser = {
                            ...req.body,
                            password: hash,
                        };
                        User.create(newUser)
                        .then(function() {
                            res.status(201).json({ message: 'Nouvel utilisateur créé' });
                        })
                            .catch(error => res.status(403).json({ error }));
                    })

                    .catch(error => {res.status(500).json({ message: 'Erreur lors de la création de compte'})})
            }
        
        


exports.login = (req,res) => {
    console.log('on arrive')
    console.log(req.body)
    //recup params
    
    let mail = req.body.mail;
    let password = req.body.password;
    

    if (mail == '' || password == ''){
        console.log(mail,password)
   
        return res.status(400).json({'error': 'paramètres manquant'});
    } 
    User.findOne({where:{mail:mail}})
   
        .then(User =>{
           
            if (User) {
                bcrypt.compare(password,User.password)
                .then(valid => {
                    if (!valid) {                     //si mdp incorrect
                      return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }else{
                        res.status(200).json({            //si mot de passe correct on renvoi la reponse attendu
                            userId: User.id,
                            token: jwtUtils.genererToken(User)
                                   
                        });
                    }
                })
                .catch(error => res.status(500).json({ error }));
            }else{ 
                return res.status(400).json({alerte:"utilisateur inconnu"})
            }
        })
        .catch(error => res.status(500).json({ error }));
    
}

exports.getOneProfil = (req, res, next) => {  
            //on recupère le token dans les headers
    const decodedToken = jwt.verify(token, tokenKey);                  //on decode le token
    const userId = decodedToken.userId;                       
    //let idProfil = req.params.id
    models.User.findOne({ where:{ id: userId}, 
        include:[
            {model:models.Publication, where:{UserId: userId},required:false}
          ]})
      .then(User => res.status(200).json(User))
      .catch(error => res.status(404).json({ error }))
  };

  exports.deleteUser= (req, res, next) =>{
    User.findOne({
        where: { id: req.params.id }
      })
      .then((User) =>{
        let acces=false
        order(req)
        admin(req)
        if (acces=true) {
        User.destroy({ id: req.params.id },{ truncate: true })
          .then(()=> res.status(201).json({message:'User supprimé'}))
          .catch((error)=> res.status(400).json({error}))}
      })
      .catch(()=> res.status(500).json({ 'error': 'User introuvable' }))
};