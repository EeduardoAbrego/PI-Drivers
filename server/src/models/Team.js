const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('Team', {
     Id: {
      type: DataTypes.UUID,
      primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    },
     team: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   });
  };