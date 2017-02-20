const path = require('path');
// const googleKey = require('../../../config/config').geocodeKey;
const axios = require('axios');

module.exports = (app) => {

  app.route(`/api/:street/:city/:state/:zip`)
    .get((req, res) => {
      const {street, city, state, zip} = req.params;
      console.log(`street: ${street}, city: ${city}, zip: ${zip}, state: ${state}`);

      res.redirect(`https://maps.googleapis.com/maps/api/geocode/json?address=${street},${city},${state}&key=${googleKey}`);
      // axios.get
    });

  /*
    @route-name: n/a
    @input: n/a
    @output: index.html contents
    @fn: role is to send back index.html when user makes requests to
    our server
  */
  app.route(`/*`)
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '/../../client/index.html'));
    });
};

/*

GOOGLE APIs
 geolocation -- if you want to find current location based off cell-towers
 geocoding -- give a destination
 distance matrix -- compute distance between locations

*/

