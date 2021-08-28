const bcrypt = require('bcrypt');
const models = require('../models');
const jwt = require('jsonwebtoken');
const User = models.user;
const jwtUtils = require('../utils/jwt.utils');
require('dotenv').config({ path: './variables.env' });
const tokenKey = process.env.SECRET_KEY;





//regexs
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

exports.signup = (req, res) => {



    //verification des données(regex etc)
    if (EMAIL_REGEX.test(req.body.mail)) {
        console.log('mail ok')

    } else { res.status(400).json({ message: 'mail invalide' }); }

    if (PASSWORD_REGEX.test(req.body.password)) {


    } else { res.status(400).json({ message: 'mot de passe invalide (4 - 8 caractère dont minimum 1 nombre)' }) };

    if (req.body.lastname == '' || req.body.firstname == '') {
        res.status(400).json({ message: 'Verifier formulaire!' })
    }
    let password = req.body.password;

    bcrypt.hash(password, 10)
        .then(hash => {
            console.log('on est dans le then du hash')
            const newUser = {
                ...req.body,
                password: hash,
            };
            User.create(newUser)
                .then(function () {
                    res.status(201).json({ message: 'Nouvel utilisateur créé' });
                })
                .catch(error => res.status(403).json({ error }));
        })

        .catch(() => res.status(500).json({ message: 'Erreur lors de la création de compte' }))
}




exports.login = (req, res) => {

    let mail = req.body.mail;
    let password = req.body.password;


    if (mail == '' || password == '') {
        return res.status(400).json({ message: 'paramètres manquant' });
    }
    User.findOne({ where: { mail: mail } })

        .then(User => {

            if (User) {
                bcrypt.compare(password, User.password)
                    .then(valid => {
                        if (!valid) {                     //si mdp incorrect
                            return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        } else {
                            res.status(200).json({            //si mot de passe correct on renvoi la reponse attendu
                                userId: User.id,
                                token: jwtUtils.genererToken(User),
                                isAdmin: User.isAdmin

                            });
                        }
                    })
                    .catch(error => res.status(500).json({ error }));
            } else {
                return res.status(400).json({ alerte: "utilisateur inconnu" })
            }
        })
        .catch(error => res.status(500).json({ error }));

}

exports.getOneProfil = (req, res) => {
    let token = req.params.id  //on recupère le token dans les headers

    const decodedToken = jwt.verify(token, tokenKey);                  //on decode le token
    const userId = decodedToken.userId;

    User.findOne({
        where: { id: userId }
    })
        .then(User => res.status(200).json(User))
        .catch(error => res.status(404).json({ error }))
};

exports.getProfilOther = (req, res) => {
    let userId = req.params.id

    User.findOne({
        where: { id: userId }
    })

        .then(User => {
            const user = jwtUtils.decoderTokenUser(req)
            const isAdmin = jwtUtils.decoderTokenAdmin(req)

            if (user === User.id || isAdmin === true) {
                res.status(200).json(User)
            } else { res.satus(401) }
        })
        .catch(error => res.status(404).json({ error }))
};



exports.deleteUser = async (req, res, next) => {
    try {
        const userId = jwtUtils.decoderTokenUser(req)
        const isAdmin = jwtUtils.decoderTokenAdmin(req)

        await User.findOne({ where: { id: req.params.id } })
            .then((User) => {
                if (userId === User.id || isAdmin === true) {
                    User.destroy({ id: req.params.id }, { truncate: true })
                    res.status(200).json({ message: 'User supprimé' })
                } else {
                    res.status(403).json({ message: "vous n'avez pas les droits" })
                }
            }).catch((error) => res.status(404).json({ error }))
    } catch (error) {
        res.status(500).json({ error })
    }
}
