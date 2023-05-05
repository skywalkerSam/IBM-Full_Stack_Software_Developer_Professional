const fs = require('fs');
const data = fs.readFileSync('/content.md');     // blocks here until file is read
console.log(data);   //writes data in the content.md file to the console
