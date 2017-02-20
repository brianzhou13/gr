# gr

# About
A simple store-locator for people seeking to find the closest store near a specified location.

# How it works?
Before anything happens and upon startup, the server will run a script that will use the `csv-parse` ( https://www.npmjs.com/package/csv-parse ) package to stream out the .csv entries into an array and makes it available by passing in a callback. These files can be found within the `/bin` folder. 

It is expected for the user to enter in the fields `Street`, `City`, `State`, and `Zip`. Once these details are entered into the form, and the user hits the `Find Stores` button, a request will be made to the backend for the details to be translated into geocode. The geocoding is done through Google's Geocoding Api: ( https://developers.google.com/maps/documentation/geocoding/start ), and it takes in the parameters of `Address`, `City`, and `State`, and it returns the Longitdue and Latitude values. Once we have both, we wrap them around an array and compare it against the Longitude and Latitude values for each store. 

Understanding how to calculate the distance between longitude and latitude points took a bulk of my time. I ended up using the "Haversine Formula" to calculate the distance between the two locations, and referred to code ( https://rosettacode.org/wiki/Haversine_formula#JavaScript ) to build it. The process currently isn't really optimized, and simply loops through all `store` data values, comparing each value against the entered geolocation coordinates to find the shortest distance.

Once the shortest distance was found, that value would be cached into a simple object with the key being the `url` of the google geocoding API request as its key, and the `shortestDistance` as its value. This small implementation could help greatly reduce calculations on our servers by preventing duplicate calculations. 

The final data object is then passed to the front end and displayed within the `Results.jsx` component. The UI is built with React, styled with Bootstrap, and bundled with Webpack.

# Possible Optimizations

Spent some time thinking about the data-structure I wanted to use for the data within the .csv, but I ultimately decided to keep it simple and in an array. Other data structures that I was contemplating on using included a BinarySearchTree, but I decided that their time complexity didn't fit given my time constraint. I wanted to use a BST because of how order would be maintained throughout the tree, and searching for the value would be log(n). 

Another optimization would be to have the .csv array sorted before having it be compared against the user input; however, I wasn't sure what would be the best value to sort the array against.


# Noteable Tech + Packages Used:

* react
* express
* axios
* webpack
* csv-parse
* mocha + chai

# Startup Instructions

1. `npm install` to install packages
2. `npm run wp`  to startup webpack
3. `npm start`   to startup server
4. Head over to `http://127.0.0.1:3000`

 5. `npm test` to run tests


