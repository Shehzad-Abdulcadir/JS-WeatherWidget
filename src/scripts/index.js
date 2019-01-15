import '../styles/index.scss';

const darkSkyApiKey = "a257110504dbfc792d2cd40c7ad8a0f7";
const darkSkyApiLat = "52.372600";
const darkSkyApiLong = "-1.246700";
const darkSkyApiRequestURL = "https://api.darksky.net/forecast/" + darkSkyApiKey + "/" + darkSkyApiLat + "," + darkSkyApiLong;
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

console.log(darkSkyApiRequestURL);
