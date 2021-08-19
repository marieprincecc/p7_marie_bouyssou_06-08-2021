const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './variables.env' });
const tokenKey = process.env.SECRET_KEY;

exports.genererToken =  (User) =>{
    return jwt.sign({
        idUSER: User.id ,
        isAdmin: User.isAdmin
    },
        tokenKey,                           
        { expiresIn: '10h' })                 
}
exports.decoderToken = (req, res, next) => {
  
      try {
          const token = req.headers.authorization.split(' ')[1];
          const decodedToken = jwt.verify(token, tokenKey);
          const userId = decodedToken.userId; 
         
          if(req.body.userId && req.body.userId != userId ){
              throw 'User ID non non authorisé'; 
          }
          else {
              
              next(); 
          }
      }
      catch (error) {
          console.log(error);
          console.log('Requete non authentifiée');
      }
  };

  exports.decoderTokenAdmin = (req, res, next) => {
  
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, tokenKey);
        const isAdmin = decodedToken.isAdmin; 
       
        if(isAdmin == 0 ){
            throw 'User ID non non authorisé'; 
        }
        else {
            
            next(); 
        }
    }
    catch (error) {
        console.log(error);
        console.log('Requete non authentifiée');
    }
};
  