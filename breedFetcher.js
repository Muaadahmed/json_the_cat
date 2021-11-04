const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (!error) {
    let content = JSON.parse(body);
    if (content.length !== 0) {
      console.log(content[0].description);
    } else {
      console.log('Error: Breed Does\'nt Exist...');
    }
  } else {
    console.log('Error: ', error);
  }
});