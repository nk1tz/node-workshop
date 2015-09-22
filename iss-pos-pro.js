var request = require('request');
var prompt = require('prompt');

var requestPromise = require('request-promise');
var promptPromise = require('prompt-promise');

var issPositionPromise = requestPromise('http://api.open-notify.org/iss-now.json');

issPositionPromise.then(function(res1, body){
    res1 = JSON.parse(res1);
    // var issInfo = JSON.parse(body);
    var issLat = res1.iss_position.latitude;
    var issLon = res1.iss_position.longitude;
    console.log(issLat,issLon);
    
    var userLocationPromise = promptPromise("location")
    
    userLocationPromise.then(function(res2){
        // console.log(res2);
        var userLocation = res2;
        
        var geoPromise = requestPromise('googlegeo);
        
        geoPromise.then(function(res3){
            
        });
    });
    

    
});