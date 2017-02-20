
/*
    @route-name: n/a
    @input: response object, street string, city string, state string
    @output: boolean
    @fn: checks if the response object passes set tests
  */
module.exports = ({data, street, city, state}) => {
  // check the type
  if(typeof data !== 'object') {
    return false;
  }

  // check that results received from response isn't empty
  if(!data.results.length) {
    return false;
  }

  // check that all parameters are present
  if(street === undefined || city === undefined || state === undefined || data === undefined) {
    return false;
  }

  // check that all parameters passed in aren't empty
  if(!street.length || !city.length || !state.length) {
    return false;
  }

  return true;
};