'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model { 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Publication.belongsTo(models.User,{
        foreignKey:{
          allowNull: false
        }
      }),
      models.Publication.belongsTo(models.Commentaire);
      models.Publication.hasMany(models.Commentaire)
        models.Publication.hasMany(models.User, { onDelete: 'cascade', hooks: true })
      }
    
  };
  Publication.init({
    title: DataTypes.STRING,
    texte: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Publication',
   
  });
 
  return Publication;
};