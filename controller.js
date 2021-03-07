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

// show all mahasiswa data sort by id
exports.showDataMahasiswaId = function (req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id],
        function(error, rows, fields) {
            if (error) {
                connection.log("ERRORNYA", error)
            } else {
                response.ok(rows, res);
            }
        }
    )
}
