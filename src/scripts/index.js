import "../styles/index.scss";

const darkSkyApiKey = "a257110504dbfc792d2cd40c7ad8a0f7";
const darkSkyApiLat = "52.372600";
const darkSkyApiLong = "-1.246700";
// Needed to prevent CORS errors
const proxy = 'https://cors-anywhere.herokuapp.com/';
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
const darkSkyApiRequestURL = proxy + `https://api.darksky.net/forecast/${darkSkyApiKey}/${darkSkyApiLat},${darkSkyApiLong}`;
// Add Concat function to add additional paramaters to API request
darkSkyApiRequestURL.concat('?units=uk2');

var request = new XMLHttpRequest();
request.open("GET", darkSkyApiRequestURL, true);

request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
    // Success!
        var data = JSON.parse(this.response);
        console.log(data);
    } else {
        // We reached our target server, but it returned an error
        console.log('The API request returned an error.');
    }
};

request.onerror = function() {
    // There was a connection error of some sort
    console.log('Connection error');
};

request.send();