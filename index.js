const cors = require('cors');
const express = require('express');
const app = express();
const morgan = require('morgan');

Object.assign=require('object-assign')


//settings
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
//app.set('port', port);
app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))
//app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(express.json());

//routes
//app.use(require('./routes/index'));
app.get('/', (req, res, next) => {
    res.render('Hola');
});

//app.listen(app.get('port'), () =>{
    //console.log('server on port', app.get('port'))
//});
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;