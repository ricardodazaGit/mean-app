//const cors = require('cors');
const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares
//app.use(cors());
app.use(express.json());

//routes
//app.use(require('./routes/index'));
app.get('/', (req, res, next) => {
    res.render('index.html');
});

app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});