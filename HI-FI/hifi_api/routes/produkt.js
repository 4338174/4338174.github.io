const db = require('../config/sql').connect();
var formidable = require('formidable');

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
    app.post('/produkt', function (req, res) {
      var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
        console.log(files);
      });
        db.execute(`INSERT INTO produkter (navn, pris, fk_kategori, fk_producent, image) VALUES (?, ?, ?, ?, ?)`,[req.body.navn, req.body.pris, req.body.kategori, req.body.producent, req.body.image] , function (err, data) {
            res.json(data);
            console.log("insert test")
            if (err) console.log(err);
        })
    });
    app.del('/produkt/delete/:id', (req, res, next) => {
        let id = (isNaN(req.params.id) ? 0 : req.params.id);
        if (id > 0) {
            db.execute(`DELETE FROM produkter WHERE id = ?`, [req.params.id], (err, rows) => {
                if (err) {
                    console.log(err);
                    res.json(400);
                } else {
                    res.json(204);
                }
            })
        } else {
            res.json(400, {
                message: 'id ikke valid'
            });
        }
    });
}
