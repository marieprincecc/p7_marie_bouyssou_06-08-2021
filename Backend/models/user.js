
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user",{
     mail:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    firstname:{
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname:{
      type: Sequelize.STRING,
            allowNull: false
    } ,
    password: {
      type: Sequelize.STRING,
            allowNull: false,
    },
    isAdmin:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }, 
  
  });
  User.associate=(models)=>{
 
    User.hasMany(models.publication, {foreignKey: {name: 'userId'}, onDelete: 'CASCADE',as: 'publication'})
    User.hasMany(models.commentaire, {foreignKey: {name: 'userId'}, onDelete: 'CASCADE', onUpdate: 'CASCADE', as: 'commentaire'})
  };

  return User;
};