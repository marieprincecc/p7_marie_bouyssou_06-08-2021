//imports
const express = require('express')
const userCtrl = require("./controllers/userCtrl")
const publicationCtrl = require("./controllers/publicationCtrl")
const commentaireCtrl = require("./controllers/commentaireCtrl")
const authentification = require('./utils/jwt.utils')
//exports

exports.router = (function(){
    const appRouter = express.Router();

    //users routes
    appRouter.route('/profil/:id').get(authentification.decoderToken,userCtrl.getOneProfil);
    appRouter.route('/').post(userCtrl.register);
    appRouter.route('/connexion').post(userCtrl.login);
    appRouter.route('/profil/:id').delete(authentification.decoderToken,userCtrl.deleteUser);
    //publications routes
    appRouter.route('/accueil').get(publicationCtrl.getAllPublication);
    appRouter.route('/poste/:id').get(publicationCtrl.getOnePublication);
    appRouter.route('/poste').post(authentification.decoderToken,publicationCtrl.createPublication);
    appRouter.route('/poste/:id').delete(authentification.decoderToken,publicationCtrl.deletePublication);  
    //commentaires routes
    appRouter.route('poste/:id').get(commentaireCtrl.getAllCommentaire);
    appRouter.route('/poste/:id').post(authentification.decoderToken,commentaireCtrl.createCommentaire);
    appRouter.route('poste/:id/commentaire/:id').put(authentification.decoderToken,commentaireCtrl.modifyCommentaire);
    appRouter.route('poste/:id').delete(authentification.decoderToken,commentaireCtrl.deleteCommentaire);  

    return appRouter;
})();