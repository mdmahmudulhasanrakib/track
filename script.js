const display = document.getElementById("display");

function getLocation()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
        // navigator.geolocation.watchPosition(showPosition);
    }
    else
    {
        display.innerHTML("geolocation is not available in your browser!");
    }
}

function showPosition(position)
{
    display.innerHTML = "Latitude: " + position.coords.latitude + 
    "</br> longitude: "+ position.coords.longitude +
    "</br> Speed: "+position.coords.speed;

}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }