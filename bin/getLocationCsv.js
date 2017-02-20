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

module.exports = (cb) => {
  if(typeof data !== 'undefined') {
    cb(data);
  } else {
    callback = cb;
  }
};