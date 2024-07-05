const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));


function countWords(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          if (err.code === 'ENOENT') {
            reject(`File not found: ${filePath}`);
          } else {
            reject(err);
          }
        } else {
          const wordCount = data.split(/\s+/).length;
          resolve({ file: filePath, wordCount });
        }
      });
    });
  }

  
  function countWords(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          if (err.code === 'ENOENT') {
            reject(`File not found: ${filePath}`);
          } else {
            reject(err);
          }
        } else {
          const wordCount = data.split(/\s+/).length;
          resolve({ file: filePath, wordCount });
        }
      });
    });
  }
  

  // Run the function
processFiles();