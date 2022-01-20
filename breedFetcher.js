let arg = process.argv.slice(2);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {

  let data = JSON.parse(body);

  if (response.statusCode !== 200) {
    console.log("no");
  }
  
  if (data[0] === undefined) {
    console.log("Breed cannot be found.");
  } else {
  console.log(data[0].description);
  }
});

