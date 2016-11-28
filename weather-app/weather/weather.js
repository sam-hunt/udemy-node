//https://darksky.net/dev/docs
const request = require('request');

var getWeather = (lat, lng, callback) => {
    apiKey = '082fd701dc50e1afd5ae7cbfff49594a';
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {   
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature        : body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather from darksky API');
        }
    });
}

module.exports.getWeather = getWeather;
