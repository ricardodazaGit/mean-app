const cors = require('cors');
const express = require('express');
const app = express();
const morgan = require('morgan');

Object.assign=require('object-assign')

//settings
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))
//app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(express.json());

//routes
//app.use(require('./routes/index'));
router.get('/', (req, res, next) => {
    res.render('Hola');
});

app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});

module.exports = app ;