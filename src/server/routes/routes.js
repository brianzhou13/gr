const path = require('path');

module.exports = (app) => {
  
  // app for routes

  app.route(`/*`)
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '/../../client/index.html'));
    })
};