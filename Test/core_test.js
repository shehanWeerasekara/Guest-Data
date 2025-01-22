const fs = require('node:fs');

fs.writeFileSync("data.txt","hello");
fs.appendFileSync("data.txt"," world");