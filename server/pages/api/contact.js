"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 2744:
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ 6328:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 1441:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _mysql = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(2744));
const db = _mysql.default.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "freewebt_vishal",
    password: "Scilent12@",
    database: "freewebt_contact"
});
module.exports = db;


/***/ }),

/***/ 1720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1441);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_0__);

function handler(req, res) {
    switch(req.method){
        case "GET":
            handleGetRequest(req, res);
            break;
        case "POST":
            handlePostRequest(req, res);
            break;
        case "PUT":
            handlePutRequest(req, res);
            break;
        case "DELETE":
            handleDeleteRequest(req, res);
            break;
        default:
            res.status(400).send("Invalid HTTP method");
            break;
    }
}
function handleGetRequest(req, res) {
    _config_config__WEBPACK_IMPORTED_MODULE_0___default().getConnection(function(err, connection) {
        if (err) {
            throw err;
        }
    // const id = req.query.id;
    // if (id) {
    //   connection.query('SELECT * FROM contact WHERE id = ?', [id], function (error, results, fields) {
    //     if (error) throw error;
    //     res.status(200).json(results);
    //     connection.release();
    //   });
    // } else {
    //   connection.query('SELECT * FROM contact', function (error, results, fields) {
    //     if (error) throw error;
    //     res.status(200).json(results);
    //     connection.release();
    //   });
    // }
    });
}
function handlePostRequest(req, res) {
    _config_config__WEBPACK_IMPORTED_MODULE_0___default().getConnection(function(err, connection) {
        if (err) {
            throw err;
        }
        const values = [
            req.body.name,
            req.body.email,
            req.body.phone,
            req.body.message
        ];
        console.log(`values: ${values}`);
        const q = "INSERT INTO contact(`name`, `email`, `phone`, `message`) VALUES (?)";
        connection.query(q, [
            values
        ], (err, data)=>{
            if (err) {
                return res.json(err);
            }
            return res.status(200).json("Thank you for choosing us for your web development needs. We will be in touch with you soon.");
        });
    });
}
function handlePutRequest(req, res) {
    _config_config__WEBPACK_IMPORTED_MODULE_0___default().getConnection(function(err, connection) {
        if (err) {
            throw err;
        }
        console.log("Connected to database");
        const { id , name , email  } = req.body;
        connection.query("UPDATE contact SET name = ?, email = ? WHERE id = ?", [
            name,
            email,
            id
        ], function(error, results, fields) {
            if (error) throw error;
            // Send a success response back to the client
            res.status(200).send(`Successfully updated record with id ${id}`);
            // Release the connection when you're done with it
            connection.release();
        });
    });
}
function handleDeleteRequest(req, res) {
    _config_config__WEBPACK_IMPORTED_MODULE_0___default().getConnection(function(err, connection) {
        if (err) {
            throw err;
        }
        console.log("Connected to database");
        const id = req.query.id;
        connection.query("DELETE FROM contact WHERE id = ?", [
            id
        ], function(error, results, fields) {
            if (error) throw error;
        // Send a success
        });
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1720));
module.exports = __webpack_exports__;

})();