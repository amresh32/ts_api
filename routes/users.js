"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var express = require("express");
var app = express();
var uuidv4 = require('uuid').v4;
var router = express.Router();
var users = [];
router.get('/', function (req, res) {
    console.log(users);
    res.send(users);
});
router.get('/getBrowserInfo', function (req, res) {
    res.send(req.headers['user-agent']);
});
router.post('/', function (req, res) {
    var user = req.body;
    users.push(__assign(__assign({}, user), { id: uuidv4() }));
    res.send("User with the name ".concat(user.firstname, " added to the database!"));
});
router.get('/:id', function (req, res) {
    var id = req.params.id;
    var foundUser = users.find(function (user) { return user.id === id; });
    res.send(foundUser);
});
router["delete"]('/:id', function (req, res) {
    var id = req.params.id;
    users = users.filter(function (user) { return user.id !== id; });
    res.send("User with the id ".concat(id, " deleted from database."));
});
router.patch('/:id', function (req, res) {
    var id = req.params.id;
    var _a = req.body, firstname = _a.firstname, lastname = _a.lastname, age = _a.age;
    var user = users.find(function (user) { return user.id === id; });
    if (firstname)
        user.firstname = firstname;
    if (lastname)
        user.lastname = lastname;
    if (age)
        user.age = age;
    res.send("User with the id ".concat(id, " has been updated."));
});
exports["default"] = router;
