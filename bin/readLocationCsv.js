var fs = require('fs');
var parse = require('csv-parse');
var bluebird = require('bluebird');

/*
  @fn-name: n/a
  @input: a resolve and reject 
  @output: parsed values from `store-location.csv`
  @fn: uses the `csv-parse` package to stream out the contents within the
      .csv file and will either reject with an error or resolve with the
      data to the calling function in `getLocationCsv`
*/
module.exports = ({resolve, reject}) => {
  var parser = parse({delimiter: ',', columns: true, auto_parse: true}, function(err, data){
    if(err) {
      console.error(`rejecting error in reading csv file: ${err}`);
      reject(err);
    }
    resolve(data);
  });
  
  var reader = fs.createReadStream(__dirname +'/store-locations.csv').pipe(parser);
};