//imports
const express = require('express')
const userCtrl = require('./controllers/userCtrl')
const publicationCtrl = require('./controllers/publicationCtrl')
const commentaireCtrl = require('./controllers/commentaireCtrl')
const jwt = require('./utils/jwt.utils.js')

//exports

exports.router = (function () {
    const appRouter = express.Router();

    //users routes
    appRouter.route('/profil/:id').get(userCtrl.getOneProfil);//
    appRouter.route('/profil/poste/:id').get(publicationCtrl.getPublicationProfil);//
    appRouter.route('/signup').post(userCtrl.signup);//
    appRouter.route('/login').post(userCtrl.login);//
    appRouter.route('/profil/:id').delete(userCtrl.deleteUser);  //ok si pas de publication

    //publications routes
    appRouter.route('/accueil').get(publicationCtrl.getAllPublication); //
    appRouter.route('/poste/:id').get(publicationCtrl.getOnePublication);//
    appRouter.route('/poste').post(publicationCtrl.createPublication); //
    appRouter.route('/poste/:id').delete(publicationCtrl.deletePublication);  //ok si pas de com
    //commentaires routes
    appRouter.route('/postecommentaire/:id').get(commentaireCtrl.getAllCommentaire);
    appRouter.route('/poste/commentaire/:id').get(commentaireCtrl.getOneCommentaire);//
    appRouter.route('/poste/commentaire').post(commentaireCtrl.createCommentaire); //
    appRouter.route('/poste/commentaire/:id').put(commentaireCtrl.modifyCommentaire);//
    appRouter.route('/poste/commentaire/:id').delete(commentaireCtrl.deleteCommentaire);  //

    return appRouter;
})();