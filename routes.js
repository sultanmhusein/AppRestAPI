'use strict';

module.exports = function(app) {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/showDataMahasiswa')
        .get(myjson.showDataMahasiswa);
}