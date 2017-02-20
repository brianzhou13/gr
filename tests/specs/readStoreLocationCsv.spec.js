const expect = require('chai').expect;
let getLocationData = require('../../bin/getLocationCsv');
let locationData;

getLocationData((data) => {
  locationData = data;
});

describe(`parsing data out of our store-locations.csv file`, function() {
  this.timeout(1000);

  it(`should be able to read data out and type array`, function(done) {
    expect(locationData).to.be.ok;
    expect(locationData).to.be.an(`array`);
    done();
  });

  it(`data read out should have all keys`, function(done) {
    const keys = [`Store Name`, `Store Location`, `Address`, `City`, `State`, `Zip Code`,
      `Latitude`, `Longitude`, `County`];
  
    locationData.forEach((store) => {
      expect(store).to.have.all.keys(keys);
    });

    done();
  })

  it(`data read out should have correct types`, function(done) {

    locationData.forEach((store) => {
      expect(store[`Latitude`]).to.be.a(`number`);
      expect(store[`Longitude`]).to.be.a(`number`);
      expect(store[`Store Location`]).to.be.a(`string`);
      expect(store[`Address`]).to.be.a(`string`);
    });

    done();
  });
});
