/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);



var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _require = __webpack_require__(/*! apollo-server-express */ "apollo-server-express"),
    ApolloServer = _require.ApolloServer;

var cors = __webpack_require__(/*! cors */ "cors");

var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
var server = new ApolloServer({
  modules: [__webpack_require__(/*! ./resolvers/index.js */ "./app/resolvers/index.js")]
});
server.applyMiddleware({
  app: app
});
app.get("/", function (req, res) {
  return res.send("okay boomer");
});
app.listen({
  port: 3000
}, function () {
  return console.log("\uD83D\uDE80 Server ready at http://localhost:3000/graphql");
}); //sequelize-auto -h localhost -d payments -u root -x password --dialect mysql -o ./app/models
//above mentioned command is used to change the schema of models automatically, if the structure of  database is changed
//sequelize-auto must be installed globally also

/***/ }),

/***/ "./app/database.js":
/*!*************************!*\
  !*** ./app/database.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

__webpack_require__(/*! dotenv/config */ "dotenv/config");

var db = {};
/*
db name=payments
username=root
password=
*/

var sequelize = new Sequelize("payments", "root", "", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  define: {
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
var models = [__webpack_require__(/*! ./models/data.js */ "./app/models/data.js"), __webpack_require__(/*! ./models/files.js */ "./app/models/files.js"), __webpack_require__(/*! ./models/users.js */ "./app/models/users.js")]; // Initialize models

models.forEach(function (model) {
  var seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
}); // Apply associations

Object.keys(db).forEach(function (key) {
  if ("associate" in db[key]) {
    db[key].associate(db);
  }
}); //Apply relationships between tables

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

/***/ }),

/***/ "./app/models/data.js":
/*!****************************!*\
  !*** ./app/models/data.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = function (sequelize, DataTypes) {
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
    sequelize: sequelize,
    tableName: 'data',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "dataId"
      }]
    }, {
      name: "filesId",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "filesId"
      }]
    }]
  });
};

/***/ }),

/***/ "./app/models/files.js":
/*!*****************************!*\
  !*** ./app/models/files.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = function (sequelize, DataTypes) {
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
    sequelize: sequelize,
    tableName: 'files',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "userId"
      }, {
        name: "filesId"
      }]
    }, {
      name: "fileLink",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "fileLink"
      }]
    }]
  });
};

/***/ }),

/***/ "./app/models/users.js":
/*!*****************************!*\
  !*** ./app/models/users.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "email"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize: sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "userId"
      }]
    }, {
      name: "email",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "email"
      }]
    }]
  });
};

/***/ }),

/***/ "./app/resolvers/index.js":
/*!********************************!*\
  !*** ./app/resolvers/index.js ***!
  \********************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
var _templateObject;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query {\n    filesDataAPI: [APISchema]!\n    testAPI: testSchema!\n  }\n  type testSchema {\n    status: Int!\n  }\n  type APISchema {\n    filesId: String!\n    userId: String!\n    fileLink: String!\n    dateOfUpload: String!\n    fileName: String!\n  }\n"])));
var resolvers = {
  Query: {
    filesDataAPI: function () {
      var _filesDataAPI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var a;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _database__WEBPACK_IMPORTED_MODULE_1__["files"].findAll({
                  raw: true,
                  nest: true
                });

              case 2:
                a = _context.sent;
                return _context.abrupt("return", a);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function filesDataAPI() {
        return _filesDataAPI.apply(this, arguments);
      }

      return filesDataAPI;
    }(),
    testAPI: function () {
      var _testAPI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", {
                  status: 200
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function testAPI(_x, _x2, _x3, _x4) {
        return _testAPI.apply(this, arguments);
      }

      return testAPI;
    }()
  }
};

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9kYXRhLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVzb2x2ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiYm9keVBhcnNlciIsInJlcXVpcmUiLCJBcG9sbG9TZXJ2ZXIiLCJjb3JzIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZXJ2ZXIiLCJtb2R1bGVzIiwiYXBwbHlNaWRkbGV3YXJlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImxpc3RlbiIsInBvcnQiLCJjb25zb2xlIiwibG9nIiwiU2VxdWVsaXplIiwiZGIiLCJzZXF1ZWxpemUiLCJob3N0IiwiZGlhbGVjdCIsImRlZmluZSIsImZyZWV6ZVRhYmxlTmFtZSIsInBvb2wiLCJtYXgiLCJtaW4iLCJhY3F1aXJlIiwiaWRsZSIsIm9wZXJhdG9yc0FsaWFzZXMiLCJtb2RlbHMiLCJmb3JFYWNoIiwibW9kZWwiLCJzZXFNb2RlbCIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXNzb2NpYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIkRhdGFUeXBlcyIsImRhdGFJZCIsInR5cGUiLCJTVFJJTkciLCJhbGxvd051bGwiLCJwcmltYXJ5S2V5IiwiZmlsZXNJZCIsInVuaXF1ZSIsIml0ZW1OYW1lIiwicXVhbnRpdHkiLCJJTlRFR0VSIiwidmFsdWUiLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwiaW5kZXhlcyIsInVzaW5nIiwiZmllbGRzIiwidXNlcklkIiwiZmlsZUxpbmsiLCJkYXRlT2ZVcGxvYWQiLCJEQVRFT05MWSIsImZpbGVOYW1lIiwiTmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwidHlwZURlZnMiLCJncWwiLCJyZXNvbHZlcnMiLCJRdWVyeSIsImZpbGVzRGF0YUFQSSIsImZpbmRBbGwiLCJyYXciLCJuZXN0IiwiYSIsInRlc3RBUEkiLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FEUDtBQVFMQyxXQUFPO0FBQUEsNkVBQUUsa0JBQU9DLEdBQVAsRUFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFDQTtBQUNMQyx3QkFBTSxFQUFFO0FBREgsaUJBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVJGO0FBRGdCLENBQWxCLEM7Ozs7Ozs7Ozs7O0FDbkJQLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2FwcC5qc1wiKTtcbiIsImltcG9ydCBcIkBiYWJlbC9wb2x5ZmlsbFwiO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xyXG5jb25zdCB7IEFwb2xsb1NlcnZlciB9ID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuYXBwLnVzZShjb3JzKCkpO1xyXG5cclxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XHJcbiAgbW9kdWxlczogW3JlcXVpcmUoXCIuL3Jlc29sdmVycy9pbmRleC5qc1wiKV0sXHJcbn0pO1xyXG5cclxuc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KTtcclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4gcmVzLnNlbmQoXCJva2F5IGJvb21lclwiKSk7XHJcblxyXG5hcHAubGlzdGVuKHsgcG9ydDogMzAwMCB9LCAoKSA9PlxyXG4gIGNvbnNvbGUubG9nKGDwn5qAIFNlcnZlciByZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JhcGhxbGApXHJcbik7XHJcblxyXG4vL3NlcXVlbGl6ZS1hdXRvIC1oIGxvY2FsaG9zdCAtZCBwYXltZW50cyAtdSByb290IC14IHBhc3N3b3JkIC0tZGlhbGVjdCBteXNxbCAtbyAuL2FwcC9tb2RlbHNcclxuLy9hYm92ZSBtZW50aW9uZWQgY29tbWFuZCBpcyB1c2VkIHRvIGNoYW5nZSB0aGUgc2NoZW1hIG9mIG1vZGVscyBhdXRvbWF0aWNhbGx5LCBpZiB0aGUgc3RydWN0dXJlIG9mICBkYXRhYmFzZSBpcyBjaGFuZ2VkXHJcbi8vc2VxdWVsaXplLWF1dG8gbXVzdCBiZSBpbnN0YWxsZWQgZ2xvYmFsbHkgYWxzb1xyXG4iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xyXG5yZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTtcclxudmFyIGRiID0ge307XHJcblxyXG4vKlxyXG5kYiBuYW1lPXBheW1lbnRzXHJcbnVzZXJuYW1lPXJvb3RcclxucGFzc3dvcmQ9XHJcbiovXHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFwicGF5bWVudHNcIiwgXCJyb290XCIsIFwiXCIsIHtcclxuICBob3N0OiBcImxvY2FsaG9zdFwiLFxyXG4gIHBvcnQ6IFwiMzMwNlwiLFxyXG4gIGRpYWxlY3Q6IFwibXlzcWxcIixcclxuICBkZWZpbmU6IHtcclxuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcclxuICB9LFxyXG4gIHBvb2w6IHtcclxuICAgIG1heDogNSxcclxuICAgIG1pbjogMCxcclxuICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgaWRsZTogMTAwMDAsXHJcbiAgfSxcclxuICAvLyBodHRwOi8vZG9jcy5zZXF1ZWxpemVqcy5jb20vbWFudWFsL3R1dG9yaWFsL3F1ZXJ5aW5nLmh0bWwjb3BlcmF0b3JzXHJcbiAgb3BlcmF0b3JzQWxpYXNlczogZmFsc2UsXHJcbn0pO1xyXG5cclxubGV0IG1vZGVscyA9IFtcclxuICByZXF1aXJlKFwiLi9tb2RlbHMvZGF0YS5qc1wiKSxcclxuICByZXF1aXJlKFwiLi9tb2RlbHMvZmlsZXMuanNcIiksXHJcbiAgcmVxdWlyZShcIi4vbW9kZWxzL3VzZXJzLmpzXCIpLFxyXG5dO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBtb2RlbHNcclxubW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XHJcbiAgY29uc3Qgc2VxTW9kZWwgPSBtb2RlbChzZXF1ZWxpemUsIFNlcXVlbGl6ZSk7XHJcbiAgZGJbc2VxTW9kZWwubmFtZV0gPSBzZXFNb2RlbDtcclxufSk7XHJcblxyXG4vLyBBcHBseSBhc3NvY2lhdGlvbnNcclxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gIGlmIChcImFzc29jaWF0ZVwiIGluIGRiW2tleV0pIHtcclxuICAgIGRiW2tleV0uYXNzb2NpYXRlKGRiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy9BcHBseSByZWxhdGlvbnNoaXBzIGJldHdlZW4gdGFibGVzXHJcblxyXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGI7XHJcbiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgnZGF0YScsIHtcbiAgICBkYXRhSWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBmaWxlc0lkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgICB1bmlxdWU6IFwiZmlsZXNJZFwiXG4gICAgfSxcbiAgICBpdGVtTmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBxdWFudGl0eToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICB0YWJsZU5hbWU6ICdkYXRhJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJkYXRhSWRcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImZpbGVzSWRcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiZmlsZXNJZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9KTtcbn07XG4iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ2ZpbGVzJywge1xuICAgIGZpbGVzSWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHVzZXJJZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIGZpbGVMaW5rOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NiksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgdW5pcXVlOiBcImZpbGVMaW5rXCJcbiAgICB9LFxuICAgIGRhdGVPZlVwbG9hZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEVPTkxZLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBmaWxlTmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICB0YWJsZU5hbWU6ICdmaWxlcycsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gICAgaW5kZXhlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBSSU1BUllcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwidXNlcklkXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiZmlsZXNJZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZmlsZUxpbmtcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiZmlsZUxpbmtcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCd1c2VycycsIHtcbiAgICB1c2VySWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBOYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDUwKSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNTApLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgICAgdW5pcXVlOiBcImVtYWlsXCJcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMTUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ3VzZXJzJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJ1c2VySWRcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcImVtYWlsXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcclxuaW1wb3J0ICogYXMgZGIgZnJvbSBcIi4vLi4vZGF0YWJhc2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICBleHRlbmQgdHlwZSBRdWVyeSB7XHJcbiAgICBmaWxlc0RhdGFBUEk6IFtBUElTY2hlbWFdIVxyXG4gICAgdGVzdEFQSTogdGVzdFNjaGVtYSFcclxuICB9XHJcbiAgdHlwZSB0ZXN0U2NoZW1hIHtcclxuICAgIHN0YXR1czogSW50IVxyXG4gIH1cclxuICB0eXBlIEFQSVNjaGVtYSB7XHJcbiAgICBmaWxlc0lkOiBTdHJpbmchXHJcbiAgICB1c2VySWQ6IFN0cmluZyFcclxuICAgIGZpbGVMaW5rOiBTdHJpbmchXHJcbiAgICBkYXRlT2ZVcGxvYWQ6IFN0cmluZyFcclxuICAgIGZpbGVOYW1lOiBTdHJpbmchXHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBmaWxlc0RhdGFBUEk6IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYSA9IGF3YWl0IGRiLmZpbGVzLmZpbmRBbGwoe1xyXG4gICAgICAgIHJhdzogdHJ1ZSxcclxuICAgICAgICBuZXN0OiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9LFxyXG4gICAgdGVzdEFQSTogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9