const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('files', {
    filesId: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    fileLink: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: "fileLink"
    },
    dateOfUpload: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fileName: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'files',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userId" },
          { name: "filesId" },
        ]
      },
      {
        name: "fileLink",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fileLink" },
        ]
      },
    ]
  });
};
