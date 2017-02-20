const googleKey = require('../../../config/config').geocodeKey;

/*
  @fn-name: geolocation
  @input: street, city, state string
  @output: url to query against google's geocode api
  @fn: builds the url to use to query google's geocode api
*/
module.exports = {
  geolocation: ({street, city, state}) => {
    const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${street},${city},${state}&key=${googleKey}`;
    
    return googleUrl;
  }
}