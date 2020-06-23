const fs = require('fs');
fs.readFile('./controller/data/data.json', 'utf8', function(err, contents) {
    console.log(contents);
});