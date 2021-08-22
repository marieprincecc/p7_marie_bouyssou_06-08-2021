module.exports = (sequelize, Sequelize) => {
  const Publication = sequelize.define("publication",{
  
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
    Publication.belongsTo(models.user, {foreignKey: 'userId', hooks: true, as: 'user'})
    Publication.hasMany(models.commentaire, {foreignKey: {name: 'publicationId'}, onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true, as: 'publication'})
    };
  
 
  return Publication;
};