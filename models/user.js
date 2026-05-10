'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.associate = function(models) {
      User.hasMany(models.Task, { foreignKey: "userId", as: "tasks" });
  };
    
    }
  }
  User.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};