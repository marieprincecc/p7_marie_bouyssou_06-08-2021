
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    mail: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },

  });
  User.associate = (models) => {

    User.hasMany(models.publication, { onDelete: 'CASCADE', as: 'publication' })
    User.hasMany(models.commentaire, { onDelete: 'CASCADE', onUpdate: 'CASCADE', as: 'commentaire' })
  };

  return User;
};