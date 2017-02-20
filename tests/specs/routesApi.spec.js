const expect = require('chai').expect;
const axios = require('axios');
const appUrl = require('../../config/config').appUrl;

///api/:street/:city/:state/:zip
const street = '5537 W Broadway Ave';
const city = 'Crystal';
const state = 'MN';
const zip = '55428-3507';

const url = `${appUrl}/api/${street}/${city}/${state}/${zip}`;

describe(`tests for own api route: /api/:street/:city/:state/:zip`, function() {
  it('should return a location given proper coordinates', function(done) {
    const keys = ['Address', 'Distance', 'Latitude', 'City', 'Longitude', 'Store Location', 'City'];

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
    const badUrl = `${appUrl}/api/1--2341/1d562341/fg--2341/12341945`;

    axios.get(badUrl)
      .then((resp) => {
        const data = resp.data;

        expect(data).to.be.a(`string`);
        expect(data).to.equal(`response didn't pass test`);

        done();
      })
      .catch((err) => {
        console.error(`err in test for improper coordinates: ${err}`);
        done(err);
      });
  })

  it('should return the shortest location', function(done) {
    
    axios.get(url)
      .then((resp) => {
        const data= resp.data;

        expect(data.Address).to.equal(street);
        expect(data.City).to.equal(city);
        expect(data.Distance).to.be.at.most(10);

        done();
      })
      .catch((err) => {
        console.error(`err in test for shortest location: ${err}`);
        done(err);
      })
  })
})