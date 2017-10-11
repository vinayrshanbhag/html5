var getGeoLocation = function(elementToUpdate){
    
    var locationInfo = function(position){
         var latitude = position.coords.latitude;
         var longitude = position.coords.longitude;
         var details = '';
        
        
         var properties = ['latitude','longitude','altitude',
                           'altitudeAccuracy','heading','speed'];
        
        for(var prop in position.coords){
            details+=
                "<p>" +prop+":" +position.coords[prop]+ "</p>"
        }
              
       // elementToUpdate.innerHTML= "lat=" + latitude+ ", lng =" + longitude;
       /* elementToUpdate.innerHTML = 
            "<a href='http://maps.google.com?ll="+latitude +","+longitude+" ' target='_blank'> Your current location </a>";*/
        
        elementToUpdate.innerHTML= details;
        
     
    }
    var locationInfoError = function(error){
        var errorMessage =['',
                           'Permission denied',
                           'Position Unavailable',
                           'timeout'];
        
        alert('Error receiving location info' + errorMessage[error.code]);
    }
    
    //navigator.geolocation.getCurrentPosition(locationInfo,locationInfoError);
    var options = {
        enableHighAccuracy:true,
        timeout:1000,
        maximumAge:30000
    };
    
    navigator.geolocation.watchPosition(locationInfo,locationInfoError,options);
}