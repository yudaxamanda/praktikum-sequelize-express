'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.associate = function(models) {
      Task.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };
    }
  }
  Task.init({
    id: DataTypes.UUID,
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};