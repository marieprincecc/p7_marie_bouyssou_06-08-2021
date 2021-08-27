const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './variables.env' });
const tokenKey = process.env.SECRET_KEY;

exports.genererToken = (User) => {
  return jwt.sign({
    userId: User.id,
    isAdmin: User.isAdmin
  },
    tokenKey,
    { expiresIn: '10h' })
}
exports.decoderTokenUser = (req) => {
  console.log('on decode')
   const token = req.headers.authorization   
   console.log(token)      //on recupère le token
    const decodedToken = jwt.verify(token, tokenKey);  
    const userId = decodedToken.userId
      console.log('pourqoi âs pa'+  userId)
      return userId;
}

exports.decoderTokenAdmin = (req) => {
  console.log('on decode 2')
   const token = req.headers.authorization   
   console.log(token)      //on recupère le token
    const decodedToken = jwt.verify(token, tokenKey);  
    const isAdmin = decodedToken.isAdmin    
      console.log(isAdmin+'++pourqoi pas la')
      return isAdmin;
}
   