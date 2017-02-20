const path = require('path');
// const googleKey = require('../../../config/config').geocodeKey;
const axios = require('axios');
const urlBuilder = require('../utils/utilsUrlBuilder');
const getShortestDistance = require('../utils/utilsGetClosest')();

module.exports = (app) => {

  /*
    @route-name: /api/:street/:city/:state/:zip
    @input: n/a
    @output: store that is the shortest
    @fn: queries google geolocation data and processes its results against existing
         parsed .csv data for the store that is closest
  */
  app.route(`/api/:street/:city/:state/:zip`)
    .get((req, res) => {
      const {street, city, state, zip} = req.params;
      const url = urlBuilder.geolocation({street, city, state});

      console.log(`street: ${street}, city: ${city}, zip: ${zip}, state: ${state}`);

      axios.get(url)
        .then((resp) => {
          
          const locationData = resp.data.results[0].geometry.location;

          return [parseFloat(locationData.lat), parseFloat(locationData.lng)];
        })
        .then((locationData) => {
          // apply searches

          return getShortestDistance(locationData);
        })
        .then((shortest) => {
          res.send(shortest);
        })
        .catch((err) => {
          console.error(`error in /api/:street/:city/:state/:zip route: ${err}`);
        });
    });

  /*
    @route-name: /
    @input: n/a
    @output: index.html contents
    @fn: role is to send back index.html when user makes requests to
    our server
  */
  app.route(`/`)
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '/../../client/index.html'));
    });

  /*
    @route-name: /*
    @input: n/a
    @output: error message
    @fn: all non '/' requests will return a 404
  */
  app.route(`/*`)
    .get((req, res) => {
      res.status(404).send('That page does not exist!');
    });
};

/*

GOOGLE APIs
 geolocation -- if you want to find current location based off cell-towers
 geocoding -- give a destination
 distance matrix -- compute distance between locations

*/

