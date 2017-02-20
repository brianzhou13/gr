const allLocations = require('../../../bin/getLocationCsv');
const calcDistance = require('./utilsCalcDistance');


/*
  @fn-name: n/a
  @input: user-entered geocoordinates
  @output: shortestDistance
  @fn: loops through all store location in `allLocations`, then individually calculates
       the distance between that store location and the user inputted geocoordinates while
       also tracking for the smallest distance.
  @notes: uses a closure to hold `allLocation` data
*/
module.exports = () => {
  var allLocationsData;
  var shortestDistance = {
    'Latitude': null,
    'Longitude': null,
    'Address': null,
    'Store Location': null,
    'Distance': null,
    'City': null,
  };

  // callback to get the parsed data
  const cb = (data) => {
    allLocationsData = data;
  };

  // pass in callback and execute to get back the parsed csv data
  allLocations(cb);

  return (current) => {
    // [lat1, long1], [lat2, long2]
    const [lat1, long1] = current;

    allLocationsData.forEach((store) => {
      const [lat2, long2] = [store.Latitude, store.Longitude];
      

      const distance = calcDistance([lat1, long1], [lat2, long2]);

      if(shortestDistance.Distance === null || distance < shortestDistance.Distance) {
        shortestDistance.Latitude = store.Latitude;
        shortestDistance.Longitude = store.Longitude;
        shortestDistance.Address = store.Address;
        shortestDistance.City = store.City;
        shortestDistance['Store Location'] = store['Store Location'];
        
        shortestDistance.Distance = distance;

        console.log('new shortestDistance: ', shortestDistance);
      }
    });

    return shortestDistance;
  };
}