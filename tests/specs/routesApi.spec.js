const expect = require('chai').expect;
const axios = require('axios');

///api/:street/:city/:state/:zip
const street = '5537 W Broadway Ave';
const city = 'Crystal';
const state = 'MN';
const zip = '55428-3507';

const url = `/api/${street}/${city}/${state}/${zip}`;

describe(`tests for own api route: /api/:street/:city/:state/:zip`, function() {
  it('should return a location given proper coordinates', function(done) {
    const keys = ['Address', 'Distance', 'Latitude', 'Longitude', 'Store Location', 'City'];

    axios.get(url)
      .then((resp) => {
        expect(resp.data).to.contain.all.keys(keys);

        for(const key in resp.data) {
          expect(resp.data[key]).to.be.ok;
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should return an error object if given improper coordinates', function(done) {
    
  })

  it('should return the shortest location', function(done) {

  })
})