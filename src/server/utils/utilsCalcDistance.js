// found here:
/*
so post: 
http://stackoverflow.com/questions/1185408/converting-from-longitude-latitude-to-cartesian-coordinates

code: 
https://rosettacode.org/wiki/Haversine_formula#JavaScript

*/

const turnToRadians = (deg) => {
  return (deg / 180.0) * Math.PI;
};

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