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
    appRouter.route('/profil/:id').get(userCtrl.getOneProfil);//
    appRouter.route('/').post(userCtrl.register);//
    appRouter.route('/connexion').post(userCtrl.login);//
    appRouter.route('/profil/:id/delete').delete(userCtrl.deleteUser);  //ok si pas de publication
    //publications routes
    appRouter.route('/accueil').get(publicationCtrl.getAllPublication); //
    appRouter.route('/poste/:id').get(publicationCtrl.getOnePublication); //
    appRouter.route('/poste').post(publicationCtrl.createPublication); //
    appRouter.route('/poste/:id/delete').delete(publicationCtrl.deletePublication);  //ok si pas de com
    //commentaires routes
    appRouter.route('/poste/:id/commentaire').get(commentaireCtrl.getAllCommentaire);//
    appRouter.route('/poste/:id').post(commentaireCtrl.createCommentaire); //
    appRouter.route('/poste/:id/commentaire/:id').put(commentaireCtrl.modifyCommentaire);//
    appRouter.route('/poste/:id/commentaire/:id/delete').delete(commentaireCtrl.deleteCommentaire);  //

    return appRouter;
})();