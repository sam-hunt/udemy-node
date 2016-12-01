const yargs   = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .option({
        a: {
            demand  : true,
            alias   : 'address',
            describe: 'Address to fetch weather for',
            string  : true
        },
        f: {
            demand  : false,
            alias   : 'fahrenheit',
            describe: 'Output temperatures as Fahrenheit instead'
        }
    })
    .help()
    .alias('help', 'h')
    .argv
;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                if (!argv.fahrenheit) {
                    // Convert to Celsius by default
                    weatherResults.temperature         = (weatherResults.temperature - 32) / 1.8;
                    weatherResults.apparentTemperature = (weatherResults.apparentTemperature - 32) / 1.8;
                }
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
                console.log('https://darksky.net/poweredby/');
            }
        });
    }
});
