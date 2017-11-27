const port = 1337;
const restify = require('restify');
 const corsmiddleware = require('restify-cors-middleware');
const server = restify.createServer({
    'name': 'hifi',
    'version': '1.0.0'
});






const logger = require("morgan");
server.use(logger("dev"));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

//server.use((req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", ["X-Requested-With", "options"]);
//  next();
//})

const cors = corsmiddleware({ origins: ['*'] });
server.pre(cors.preflight);
server.use(cors.actual);

require('./routes/index')(server);

server.listen(port, (err) => {
  if (err) console.log(err);
  // console.log('\n');
  console.log("_________________________________________________________");
  console.log("%s is listening on port %s", server.name, port);
});
