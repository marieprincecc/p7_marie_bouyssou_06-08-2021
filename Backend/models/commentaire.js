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
        model: 'publication',
        key: 'id'
    }
},
    content:{
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  Commentaire.associate=(models)=>{
    
    Commentaire.belongsTo(models.user, {foreignKey: 'userId', hooks: true, as: 'user'})
    Commentaire.belongsTo(models.publication, {foreignKey: 'publicationId', hooks: true, as: 'publication'})
  };
  
  return Commentaire;
};