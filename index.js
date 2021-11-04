const args = process.argv.slice(2);
const {fetchBreedDescription} = require('./breedFetcher');

fetchBreedDescription(`${args[0]}`, (error,desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});