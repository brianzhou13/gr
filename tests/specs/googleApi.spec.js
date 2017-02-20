const expect = require('chai').expect;
const axios = require('axios');
const urlBuilder = require('../../src/server/utils/utilsUrlBuilder');
const configKey = require('../../config/config').geocodeKey;

const googleExUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${configKey}`;
const street = '1600 Amphitheatre Parkway';
const city = 'Mountain View';
const state = 'CA';

describe('tests for google geolocation route', function() {
  describe('urlBuilder should return appropriate url given certain parameters', function() {
    it('should be able to return correct url', function(done) {
      const url = urlBuilder.geolocation({street, city, state});

      expect(url).to.be.equal(`https://maps.googleapis.com/maps/api/geocode/json?address=1600 Amphitheatre Parkway,Mountain View,CA&key=${configKey}`);
      done();
    });
  });

  describe('google geolocation API example route should return results', function() {
    it('given example address on Google, we should be able to receive geolocation data back', function(done) {

      axios.get(googleExUrl)
        .then((resp) => {
          const results = resp.data.results[0].geometry.location;

          expect(results.lat).to.equal(37.4219493);
          expect(results.lng).to.equal(-122.0847727);

          done();
        })
        .catch((err) =>{
          console.error(`error with test on google-ex api: ${err}`);
          done(err);
        });
    });
  });
});
