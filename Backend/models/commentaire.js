'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commentaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Commentaire.belongsTo(models.User,{
        foreignKey:{
          allowNull: false
        }
      }),
      models.Commentaire.belongsTo(models.Publication,{
        foreignKey:{
          allowNull: false
        },
        
      
        
      })
      models.Commentaire.hasMany(models.Publication, { onDelete: 'cascade',hooks: true})
    }
  };
  Commentaire.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commentaire',
    
  });
  
  return Commentaire;
};