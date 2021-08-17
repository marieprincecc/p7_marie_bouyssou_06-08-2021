//imports
const express = require('express')
const userCtrl = require("./controllers/userCtrl")
const publicationCtrl = require("./controllers/publicationCtrl")
const commentaireCtrl = require("./controllers/commentaireCtrl")
//exports

exports.router = (function(){
    const appRouter = express.Router();

    //users routes
    appRouter.route('/').post(userCtrl.register);
    appRouter.route('/connexion').post(userCtrl.login);
    appRouter.route('/profil/:id').get(userCtrl.getOneProfil);
    appRouter.route('/profil/:id').delete(userCtrl.deleteUser);
    appRouter.route('/poste').post(publicationCtrl.createPublication);
    appRouter.route('/poste/:id').post(commentaireCtrl.createCommentaire);
    appRouter.route('/poste/:id').get(publicationCtrl.getOnePublication);
    appRouter.route('/accueil').get(publicationCtrl.getAllPublication);
    appRouter.route('/poste/:id').delete(publicationCtrl.deletePublication);  

    //appRouter.route('').get(commentaireCtrl.getAllCommentaire);
    //appRouter.route('').get(commentaireCtrl.getOneeCommentaire);
    //appRouter.route('').delete(commentaireCtrl.deleteCommentaire);  


    return appRouter;
})();