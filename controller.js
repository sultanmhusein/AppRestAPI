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
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        connection.log("ERRORNYA", error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
// add data mahasiswa
exports.addDataMahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?, ?, ?)",
    [nim, nama, jurusan],
    function (error, rows, fields) {
      if (error) {
        console.log("ERRORNYA", error);
      } else {
        response.ok("Success Add Data", res);
      }
    }
  );
};

// update data mahasiswa
exports.updateDataMahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?",
    [nim, nama, jurusan, id],
    function (error, rows, fields) {
      if (error) {
        console.log("ERRORNYA", error);
      } else {
        response.ok("Succes Update Data", res);
      }
    }
  );
};

// delete data mahasiswa
exports.deleteDataMahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;
  connection.query(
    "DELETE FROM mahasiswa WHERE id_mahasiswa=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log("ERRORNYA", error);
      } else {
        response.ok("Succes Delete Data", res);
      }
    }
  );
};

// menampilkan matakuliah group
exports.showGroupMatkul = function (req, res) {
  connection.query(
    "SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa",
    function (error, rows, fields) {
        if (error) {
            console.log("ERRORNYA", error)
        } else {
            response.oknested(rows, res)
        }
    }
  );
};
