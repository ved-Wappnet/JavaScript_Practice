const fs = require('fs');

// Function to save data to a file
function saveDataToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data saved to file successfully.');
    }
  });
}

// Example usage
const dataToSave = 'ved, world!';
const filename = './data.txt';

saveDataToFile(filename, dataToSave);
