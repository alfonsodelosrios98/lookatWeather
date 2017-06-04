var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2ccd0038773e8f79859302615936f84b&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error('We were unable to process your request.');
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('We were unable to process your request.');
    });
  }
}
