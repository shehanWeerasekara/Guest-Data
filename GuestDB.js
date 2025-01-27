const chalk = require("chalk");
const fs = require("fs"); 
//guesst id, name, address, contact_no, visit_date

//add, update, delete, read, list
const db_file = "data.json";

const addGuest = (name,address,contact_no,visit_date) => {
    const guests = loadGuest();
    const length = guests.length;
    let id = 1;
    if(length>0){
        id = guests[length-1].id + 1;
    }
    guests.push({
        id,
        name,
        address,
        contact_no,
        visit_date,
    });

    saveGuest(guests);

    console.log(chalk.green("Data Saved.."));    
}

const updateGuest = (id,name,address,contact_no,visit_date ) => {
    const guests = loadGuest();
    const guestIndex = guests.findIndex((guest) => {
        return guest.id === id
    });
    if (guestIndex != 1){
        const guest = guests[guestIndex];
        guest.name = name ? name:guest.name;
        guest.address = address ? address:guest.address;
        guest.contact_no = contact_no  ? contact_no:guest.contact_no;
        guest.visit_date = visit_date ? visit_date:guest.visit_date;
        console.log(chalk.yellow("REcord Updates ",id));
        saveGuest(guests)
        
    }  else {
        console.log(chalk.red.inverse("No Record Found!"));
    }
}

const deleteGuest = (id) => {
    const guests = loadGuest();
    const newGuests = guests.filter((guest) => {
        return guest.id != id;
    });
    if (guests.length > newGuests.length) {
        saveGuest(newGuests);
        console.log(chalk.red("Delete ",id));
    }else{
        console.log(chalk.red.inverse("No Record Found !"));
    }    
}

const readGuest = (id) => {
    const guests = loadGuest();
    const guest = guests.find((guest) => {
        return guest.id === id;
    });
    if (guest) {
        console.log(chalk.magenta("Guest ",id));
        console.log(guest);
    } else{
        console.log(chalk.magenta.inverse("No Record Found !"));
    }
        
}

const listGuest = () => {
    console.log(chalk.blue("Guest list "));
    const guests = loadGuest();
    guests.forEach((guest) => {
        console.log(guest);
    });
}

const saveGuest = (guests) => {
    const dataJson = JSON.stringify(guests);
    fs.writeFileSync(db_file,dataJson);
}

const loadGuest = () => {
    try{
        const dataBuffer = fs.readFileSync(db_file);
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data; 
    } catch(e) {
        return [];
    }
}

module.exports = {
    add: addGuest,
    update: updateGuest,
    delete: deleteGuest,
    read: readGuest,
    list: listGuest,
}