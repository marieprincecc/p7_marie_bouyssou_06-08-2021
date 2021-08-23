module.exports = (sequelize, Sequelize) => {
  const Commentaire = sequelize.define("commentaire",{

    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {         // Post belongsTo User 1:1
          model: 'users',
          key: 'id'
      }
  },
  publicationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {         // Post belongsTo User 1:1
        model: 'publications',
        key: 'id'
    }
},
    content:{
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  Commentaire.associate=(models)=>{
    
    Commentaire.belongsTo(models.user, {foreignKey: 'userId',as: 'user'})
    Commentaire.belongsTo(models.publication, {foreignKey: 'publicationId', as: 'publication'})
  };
  
  return Commentaire;
};