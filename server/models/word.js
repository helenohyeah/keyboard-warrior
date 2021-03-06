'use strict';
const { Model } = require('sequelize');
const Action = require('./action');
const Arena = require('./arena');

module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
  this.belongsTo(models.Action);
  this.belongsTo(models.Arena);
    }
  };
  Word.init({
    word: { type: DataTypes.STRING, allowNull: false },
    arenaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Arena,
        key: 'id'
      }
    },
    actionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Action,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Word',
    underscored: true
  });
  return Word;
};