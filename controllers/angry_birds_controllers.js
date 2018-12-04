


var express = require('express');
var router = express.Router();
var angryBirds = require('../modules/angry_birds');



router.get('/angry_birds',function(request,response){


    var birdName = Object.keys(birds)
    var bird = birds[birdName];
    
    var mustachevariables={
        
    }


    response.render('./angry_birds/index.html')
})






module.exports = router;

//var birdarray =[];
    // for(i =0 ; i<birds.length ; i++){
    //     console.log(birdarray);
    // }