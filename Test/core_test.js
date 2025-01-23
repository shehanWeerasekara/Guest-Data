const fs = require('node:fs');
const os = require('node:os');

//save
const guests = [];
guests.push({
    name: "shehan",
    address:"kandy"
});
//console.log(guests);

const dataJSON = JSON.stringify(guests);
fs.writeFileSync("j_data.json",dataJSON);
