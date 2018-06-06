const cors = require('cors');
const express = require('express');
const app = express();


//settings
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
//app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use(require('./routes/index'));

// app.listen(app.get('port'), () =>{
//     console.log('server on port', app.get('port'))
// });
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
