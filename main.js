'use strict';

const express = require('express');
const _ = require('underscore');
const { myState, businesses } = require('./data');

const app = express();

app.use('/', (req, res) => {
    res.status(200).send('Underscore Warmup');
});

app.listen(3000);

// Strip the myState object into two arrays, one filled with its keys, the other with its values.
const myStateKeys = _.keys(myState);
console.log('myStateKeys', myStateKeys);
console.log('- - - - - - - - - -');

const myStateValues = _.values(myState);
console.log('myStateValues', myStateValues);
console.log('- - - - - - - - - -');
    
// Using these two new arrays, put them back together as an object to resemble the original myState object.
const myStateResemble = _.object(myStateKeys, myStateValues);
console.log('myStateResemble', myStateResemble);
console.log('- - - - - - - - - -');

// Alert each of the key - value pairs of the myState object.
_.each(myState, (key, value) => console.log(`${key}: ${value}`));
console.log('- - - - - - - - - -');

// Return just the names of the businesses from the businesses array.
const businessesNames = _.pluck(businesses, 'name');
console.log('businessesNames', businessesNames);
console.log('- - - - - - - - - -');

// Return the object containing “Microsoft”.
const microsoftBusiness = _.find(businesses, (business) => business.name === 'Microsoft');
console.log('microsoftBusiness', microsoftBusiness);
console.log('- - - - - - - - - -');

// Return all the businesses that are located in Bellevue in a new array.
const bellevueBusiness = _.filter(businesses, (business) => business.city === 'Bellevue');
console.log('bellevueBusiness', bellevueBusiness);
console.log('- - - - - - - - - -');

// Sort the businesses based on the city in ascending order and return the array.
const businessesSorted = _.sortBy(businesses, (business) => business.city);
console.log('businessesSorted', businessesSorted);
console.log('- - - - - - - - - -');

// Have all the business names be “Coding Dojo” without altering the original array. [hint: use _.map()]
const businessCodingDojo = _.map(businesses, (business) => {
    business.name = 'Coding Dojo';
    return business;
});
console.log('businessCodingDojo', businessCodingDojo);
console.log('- - - - - - - - - -');