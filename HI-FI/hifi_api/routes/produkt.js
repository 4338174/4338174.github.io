const db = require('../config/sql').connect();

module.exports = function (app) {
    const allproducts = `select produkter.*, kategori.fk_kategori, producent.fk_producent
		from produkter
        join kategori
				on produkter.fk_kategori = kategori.id
        join producent
				on produkter.fk_producent = producent.id`;
    
    app.get('/produkt', function (req, res) {
        db.query(allproducts, function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/id/:id', function (req, res) {
        db.query(allproducts + ' where produkter.id = ?', [req.params.id], function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/cd_a', function (req, res) {
        db.query(allproducts + ' where produkter.fk_kategori = 1', function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/dvd_a', function (req, res) {
        db.query(allproducts + ' where produkter.fk_kategori = 2', function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/eff_for', function (req, res) {
        db.query(allproducts + ' where produkter.fk_kategori = 3', function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/for_for', function (req, res) {
        db.query(allproducts + ' where produkter.fk_kategori = 4', function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/hoej', function (req, res) {
        db.query(allproducts + ' where produkter.fk_kategori = 5', function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/int_for', function (req, res) {
        db.query(allproducts + ' where produkter.fk_kategori = 6', function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/plade', function (req, res) {
        db.query(allproducts + ' where produkter.fk_kategori = 7', function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/roer_for', function (req, res) {
        db.query(allproducts + ' where produkter.fk_kategori = 8', function (err, data) {
            res.send(data);
        })
    });
    app.get('/produkt/search/:search', function (req, res) {
        db.query(allproducts + ` where produkter.navn like '%${req.params.search}%'`, function (err, data) {
            res.send(data);
        })
    });
}
