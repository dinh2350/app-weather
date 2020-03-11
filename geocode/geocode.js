const request = require("request");

const key = "AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s";
const geocodeAddress = (address, cb) => {
  const encodeAddress = encodeURIComponent(address);
  const urlMaps = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${encodeAddress}`;
  const urlWeather = `https://api.darksky.net/forecast/4662c0a0f7267b10219f07442e4948d0/37.8267,-122.4233`;
  request(
    {
      url: urlWeather,
      json: true
    },
    cb
  );
};

module.exports.geocodeAddress = geocodeAddress;
