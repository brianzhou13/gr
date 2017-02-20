const googleKey = require('../../../config/config').geocodeKey;


module.exports = {
  geolocation: ({street, city, state}) => {
    const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${street},${city},${state}&key=${googleKey}`;
    
    return googleUrl;
  }
}