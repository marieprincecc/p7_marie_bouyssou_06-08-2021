//imports
const express = require('express')
const userCtrl = require("./controllers/userCtrl")
//exports

exports.router = (function(){
    const appRouter = express.Router();

    //users routes
    appRouter.route('/').post(userCtrl.register);
    appRouter.route('/connexion').post(userCtrl.login);
    appRouter.route('/profil/:id').get(userCtrl.getOneProfil);

    return appRouter;
})();