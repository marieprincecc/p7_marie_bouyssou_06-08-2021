# p7_marie_bouyssou_06-08-2021
Projet 7 - Groupomania !
7ème et dernier projet de la formation développeur web d'Openclassrooms. Créer un réseau social d'entreprise. La stack utilisée pour ce projet:

VueJs 
NodeJs + express + sequelize
Mysql
Bootstrap4

Frontend
Ouvrir le dossier Frontend dans le terminal de votre éditeur puis exécuter la commande:

npm install
puis

npm start
si le navigateur ne s'ouvre pas automatiquement allez à :

http://localhost:8080/


Backend
Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

npm install
puis

nodemon serve

créer un fichier .env avec les variables suivantes:

DB_HOST=
DB_USER=
DB_PASS=
SECRET_KEY=

Base de données
Se connecter au serveur MySql de votre choix. Exécuter la commande: CREATE database_development; Vérifiez les identifiants dans le fichier config.json du dossier Backend



Guidelines API
Retrouver le guide pour les requêtes à l'Api sur Postman :

https://documenter.getpostman.com/view/12325951/TVYDeeqz
Utilisation
Pour s'inscrire sur le social network de Groupomania, il vous faut renseigner :

Nom
Prénom
Une adresse mail valide
Un mot de passe (de  à 8 caractères, au moin 1 chiffre). Votre compte peut être supprimé par vous-même ainsi que par l'administrateur.
Une fois connecté vous pouvez voir les publications des utilisateurs et publier au choix:

une publication, commentées, modifiées, supprimées. Le modérateur peut les supprimer.