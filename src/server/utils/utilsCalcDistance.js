const expect = require('chai').expect;

const turnToRadians = (deg) => {
  expect(deg).to.be.a('number');

  const result =  (deg / 180.0) * Math.PI;
  expect(result).to.be.a('number');
  return result;
};

/*
  @fn-name: calcHaversine
  @input: lat/long for two places -- both wrapped in an array
  @output: distance in km
  @fn: calculates the distance between two locations given their longitude/latitude 
       coordinates. The formula used is called the `Haversine` formula
  @notes: 
  http://stackoverflow.com/questions/1185408/converting-from-longitude-latitude-to-cartesian-coordinates
  https://rosettacode.org/wiki/Haversine_formula#JavaScript
*/
const calcHaversine = ([lat1, long1], [lat2, long2]) => {

  // data-format from our .csv sheet
  [rlat1, rlong1, rlat2, rlong2] = [lat1, long1, lat2, long2].map((coordInDegrees) => {
    return turnToRadians(coordInDegrees);
  });

  // difference between two points in respect to latitude
  dLat = rlat2 - rlat1;

  // difference between two points in respect o longitude
  dLong = rlong2 - rlong1;

  // radius of the earth in `km`
  radius = 6372.8;

  const a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow((Math.sin(dLong / 2)), 2) * Math.cos(rlat1) * Math.cos(rlat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  return radius * c;
};

module.exports = calcHaversine;