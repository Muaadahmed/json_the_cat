const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) {
      let content = JSON.parse(body);
      if (content.length !== 0) {
        if (content[0].description === undefined) {
          callback(error, content[0].temperament);
        } else {
          callback(error, content[0].description);
        }
      } else {
        callback(error, null);
      }
    } else {
      callback(error, body);
    }
  });
};
// fetchBreedDescription(args[0], (error,desc) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }
// });

module.exports = { fetchBreedDescription };
