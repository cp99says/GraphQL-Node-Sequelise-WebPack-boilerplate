const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data', {
    dataId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    filesId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "filesId"
    },
    itemName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'data',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dataId" },
        ]
      },
      {
        name: "filesId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "filesId" },
        ]
      },
    ]
  });
};
