const path = require('path');

module.exports = (app) => {

  app.route(`/api/:street/:city/:state/:zip`)
    .get((req, res) => {
      const {street, city, state, zip} = req.params;
      console.log(`street: ${street}, city: ${city}, zip: ${zip}, state: ${state}`);
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