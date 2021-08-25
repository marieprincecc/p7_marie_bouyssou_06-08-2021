module.exports = (sequelize, Sequelize) => {
  const Publication = sequelize.define("publication",{

    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {         // Post belongsTo User 1:1
          model: 'users',
          key: 'id'
      }
  },
  
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    texte: {
      type: Sequelize.STRING,
      allowNull: false,
    },
 
   
  });
  Publication.associate=(models)=>{
    Publication.belongsTo(models.user)
    Publication.hasMany(models.commentaire, {onDelete: 'CASCADE', onUpdate: 'CASCADE', as: 'publication'})
    };
  
 
  return Publication;
};