import "../styles/index.scss";

const darkSkyApiKey = "a257110504dbfc792d2cd40c7ad8a0f7";
const darkSkyApiLat = "52.372600";
const darkSkyApiLong = "-1.246700";
const darkSkyApiRequestURL = `https://api.darksky.net/forecast/${darkSkyApiKey}/${darkSkyApiLat},${darkSkyApiLong};`;
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

var request = new XMLHttpRequest();
request.open("GET", darkSkyApiRequestURL, true);

request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
    // Success!
        var data = JSON.parse(this.response);
    } else {
        // We reached our target server, but it returned an error
    }
};

request.onerror = function() {
    // There was a connection error of some sort
};

request.send();

console.log(request);