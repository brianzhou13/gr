var fs = require('fs');
var parse = require('csv-parse');
var bluebird = require('bluebird');

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