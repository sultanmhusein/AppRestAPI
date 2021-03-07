"use strict";

var response = require("./rest");
var connection = require("./connection");

exports.index = function (req, res) {
  response.ok("My REST API Application Working", res);
};

// show all mahasiswa data
exports.showDataMahasiswa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      connection.log("ERRORNYA", error);
    } else {
      response.ok(rows, res);
    }
  });
};
