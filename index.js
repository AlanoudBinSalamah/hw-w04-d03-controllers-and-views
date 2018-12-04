

var express = require('express');
var app = express();
var port = 3000;
var mustache = require('mustache-express');



app.engine('html', mustache());
app.set('view engine','html');
app.set('views', __dirname+ '/views');


app.get('/',function(request,response){

    
})


var angryBirdsControllers = require('./controllers/angry_birds_controllers');
app.use('/angry_birds',angryBirdsControllers );















app.listen(port,function(){
    console.log(` the App is listening on ${port}`);
});
