var DataTypes = require("sequelize").DataTypes;
var _data = require("./data");
var _files = require("./files");
var _users = require("./users");

function initModels(sequelize) {
  var data = _data(sequelize, DataTypes);
  var files = _files(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    data,
    files,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
