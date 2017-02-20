// found here:
/*
so post: 
http://stackoverflow.com/questions/1185408/converting-from-longitude-latitude-to-cartesian-coordinates

code: 
https://rosettacode.org/wiki/Haversine_formula#JavaScript

*/

const expect = require('chai').expect;

const turnToRadians = (deg) => {
  expect(deg).to.be.a('number');

  const result =  (deg / 180.0) * Math.PI;
  expect(result).to.be.a('number');
  return result;
};

const calcHaversine = ([lat1, long1], [lat2, long2]) => {

  // data-format from our .csv sheet
  [rlat1, rlong1, rlat2, rlong2] = [lat1, long1, lat2, long2].map((coordInDegrees) => {
    return turnToRadians(coordInDegrees);
  });

  // difference between two points in respect to latitude
  dLat = rlat2 - rlat1;
  // console.log('dlat is: ', dLat);

  // difference between two points in respect o longitude
  dLong = rlong2 - rlong1;
  // console.log('dlong is: ', dLong);

  // radius of the earth in `km`
  radius = 6372.8;

  const a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow((Math.sin(dLong / 2)), 2) * Math.cos(rlat1) * Math.cos(rlat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  return radius * c;
};

module.exports = calcHaversine;