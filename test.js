const fs = require('fs');
const path = require('path');
const { countWords } = require('./index.js'); // Ensure your countWords function is exported

const configPath = path.join(__dirname, './data/config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

async function testWordCount() {
  for (const filePath of config.files) {
    try {
      const result = await countWords(filePath);
      console.log(`${result.file}: ${result.wordCount} words`);
    } catch (error) {
      console.error(error);
    }
  }
}

testWordCount();
