var app = require('./server-config.js');

var port = 4568;

app.listen(process.ENV.port || port);

console.log('Server now listening on port ' + port);
