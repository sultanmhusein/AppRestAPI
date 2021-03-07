"use strict";

module.exports = function (app) {
  var myjson = require("./controller");

  app.route("/").get(myjson.index);

  app.route("/showDataMahasiswa").get(myjson.showDataMahasiswa);

  app.route("/showDataMahasiswa/:id").get(myjson.showDataMahasiswaId);

  app.route("/addDataMahasiswa").post(myjson.addDataMahasiswa);

  app.route("/updateDataMahasiswa").put(myjson.updateDataMahasiswa);

  app.route("/deleteDataMahasiswa").delete(myjson.deleteDataMahasiswa);

  app.route("/showGroupMatkul").get(myjson.showGroupMatkul);
};
