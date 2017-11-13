var express = require('express')
var path = require('path')
var bp = require('body-parser')

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modules'))
app.use(bp.urlencoded({extended: true}))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.get('/', function(req, res){
    res.render('index');
})
app.listen(8000, function(){
    console.log('Listening on port 8000...');
});
