const yargs   = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs
    .option({
        a: {
            demand  : true,
            alias   : 'address',
            describe: 'Address to fetch weather for',
            string  : true
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
        console.log(JSON.stringify(results, undefined, 4));
    }
});

//082fd701dc50e1afd5ae7cbfff49594a
//https://api.darksky.net/forecast/082fd701dc50e1afd5ae7cbfff49594a/-40.3536894,175.6130679

const request = require('request');

request({
    url: `https://api.darksky.net/forecast/082fd701dc50e1afd5ae7cbfff49594a/-40.3536894,175.6130679`,
    json: true
}, (error, response, body) => {   
    if (!error && response.statusCode === 200) {
        console.log(JSON.stringify(body.currently, undefined, 4));
    } else {
        console.log('Unable to fetch weath darksky API');
    }
});