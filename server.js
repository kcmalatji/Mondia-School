var express = require('express');  
var path = require("path");  
var bodyParser = require('body-parser');  

var index = require('./routes/index');
var languages = require('./routes/languages');
var lessons = require('./routes/lessons');

var port = 3000;
var app= express();

//view engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//set static Folder

app.use(express.static(path.join(__dirname, 'client')))

//Body Parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api',languages);
app.use('/api',lessons);

app.listen(port, function () {  
    
 console.log('Mondia App is listening on port ' + port)  
});
// module.exports = router;