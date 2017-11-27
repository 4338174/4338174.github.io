const restify = require('restify');
// const corsmiddleware = require('restify-cors-middleware');
const server = restify.createServer({
    'name': 'fruit',
    'version': '1.0.0'
});

server.use(restify.plugins.bodyParser());
// const cors = corsmiddleware({ origins: ['*'] });
// server.pre(cors.preflight);
// server.use(cors.actual);

server.get('/produkt', function (req, res) {
        res.json(204);
    })

server.listen(1337);
