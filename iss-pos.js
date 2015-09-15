//   ISS position program

var request = require('request');
var prompt = require('prompt');

// -----------------------------------------------
// MAIN
getUserLocationData();
// end MAIN --------------------------------------



 //-------Functions--------\\
//__________________________\\

function getISSLocation(loc){
    request('http://api.open-notify.org/iss-now.json', function(error, response, body) {
        if(!error){
            var issInfo = JSON.parse(body);
            var issLat = issInfo.iss_position.latitude;
            var issLon = issInfo.iss_position.longitude;
            console.log("\nThe ISS is now at: \nLatitude: " + Math.round(issInfo.iss_position.latitude * 100)/100 + "\nLongitude: " + Math.round(issInfo.iss_position.longitude * 100)/100)
        }else{
            console.log("There was an error");
        }
        lookUpGoogleMaps(loc, issLat, issLon);
    });
}

function getUserLocationData(){
    console.log("\nWhat is your location?")
    prompt.start();
    prompt.get(['location'], function (err, result) {
        if(err){
            console.log("there was an error");
        }
        //
        // Log the results.
        //

        console.log('  --  user location: ' + result.location);
        getISSLocation(result.location);
    });
}

function lookUpGoogleMaps(usrLoc, issLat, issLon){
    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + usrLoc +"", function(error, response, body) {
        if(!error){
            var userLocationInfo = JSON.parse(body);
            var userLat = userLocationInfo.results[0].geometry.location.lat;
            var userLon = userLocationInfo.results[0].geometry.location.lng;
            // console.log(userLocationInfo.results[0].geometry.location.lat + "\n" + userLocationInfo.results[0].geometry.location.lng);
        }else{
            console.log("There was an error");
        }
        // console.log(userLat, userLon, issLat, issLon)
        console.log("\nThe distance between you and the ISS is: " + Math.round( distanceToISS(userLat, userLon, issLat, issLon)/1000 ) + " kilometers\nOr approximately " + Math.round( distanceToISS(userLat, userLon, issLat, issLon)/1000000 ) + " times the width of France.");
    });
}

function distanceToISS(lat1,lon1,lat2,lon2){
    var R = 6371000; // metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2-lat1);
    var Δλ = toRadians(lon2-lon1);

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
    
    return d;
}

function toRadians(x){
   return x * Math.PI / 180;
}