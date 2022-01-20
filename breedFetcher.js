//let arg = process.argv.slice(2);

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      return callback(`Server response: ${response.statusCode}`, null);
    }
    
    let data = JSON.parse(body);

    if (data[0] === undefined) {
      callback("Breed cannot be found.", null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };

