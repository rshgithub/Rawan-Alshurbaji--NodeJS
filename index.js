
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, './data/config.json');

try {
  // Read and parse config.json
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  // **Function to count words in a file (exported)**
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

  // Function to process all files listed in config.json
  async function processFiles() {
    const promises = config.files.map(filePath => {
      const fullPath = path.join(__dirname, filePath);
      return countWords(fullPath);
    });

    try {
      const results = await Promise.all(promises);
      console.log('Word count results:');
      results.forEach(result => {
        console.log(`${result.file}: ${result.wordCount} words`);
      });
    } catch (error) {
      console.error('Error processing files:', error);
    }
  }

  // Run the processFiles function
  processFiles();

} catch (err) {
  console.error('Error reading config.json:', err);
}

 
// Option 1: Exporting by Declaration
exports.countWords = countWords;

// Option 2: Exporting by Assignment
// module.exports = { countWords };