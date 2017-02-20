const parsedLocation = require('./readLocationCsv');
// const sortData = require('./binarySo');

var data, callback;

new Promise((resolve, reject) => {
  parsedLocation({resolve, reject});
})
.then((parsedData) => {
  /*
    the list could be sorted, but I'm not sure what variable to
    sort it by...
  */

  data = parsedData;

  // will hold the callback until data is back and then execute
  if(typeof callback === 'function') {
    callback(data);
  }

})
.catch((err) => {
  console.error(`error in retrieving the data from csv sheet: ${err}`);
});


/*
  @fn-name: n/a
  @input: callback 
  @output: n/a
  @fn: takes in a callback to return the value for `data`. If the data has not
      yet been parsed from `.csv`, it'll set the passed in `cb` to the local
      variable `callback`. Once the .csv data is parsed and received from the
      resolved promise, it'll call the callback with the data.
*/
module.exports = (cb) => {
  if(typeof data !== 'undefined') {
    cb(data);
  } else {
    callback = cb;
  }
};