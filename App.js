const yargs = require("yargs"); 
const db = require("./GuestDB.js");

//guest - id, name, address, contact_no, visit_date

yargs.command({
    command: "add",
    describe: "to add a guest",
    builder:{
        name:{
            describe:"name",
            demandOption:true,
            type:"string",
        },
        address:{
            describe:"address",
            demandOption:true,
            type:"string",
        },
        contact_no:{
            describe:"contact_no",
            demandOption:true,
            type:"number",
        },
        visit_date:{
            describe:"visit_date",
            demandOption:true,
            type:"string",
        },
    },
    handler:function(argv){
        db.add(argv.name,argv.address,argv.contact_no,argv.visit_date);
    }
});

yargs.command({
    command: "update",
    describe: "to update a guest",
    builder:{
        id:{
            describe:"id",
            demandOption:true,
            type:"number",
        },
        name:{
            describe:"name",
            type:"string",
        },
        address:{
            describe:"address",
            type:"string",
        },
        contact_no:{
            describe:"contact_no",
            type:"number",
        },
        visit_date:{
            describe:"visit_date",
            type:"string",
        },
    },
    handler: function(argv){
        db.update(argv.id);
    }
});

yargs.command({
    command: "delete",
    describe: "to delete a guest",
    builder:{
        id:{
            describe:"id",
            demandOption:true,
            type:"number",
        },
        name:{
            describe:"name",
            type:"string",
        },
        address:{
            describe:"address",
            type:"string",
        },
        contact_no:{
            describe:"contact_no",
            type:"number",
        },
        visit_date:{
            describe:"visit_date",
            type:"string",
        },
    },
    handler: function(argv){
        db.delete(argv.id);
    }
});

yargs.command({
    command: "read",
    describe: "to read a guest",
    builder:{
        id:{
            describe:"id",
            demandOption:true,
            type:"number",
        },
        name:{
            describe:"name",
            type:"string",
        },
        address:{
            describe:"address",
            type:"string",
        },
        contact_no:{
            describe:"contact_no",
            type:"number",
        },
        visit_date:{
            describe:"visit_date",
            type:"string",
        },
    },
    handler: function(argv){
        db.read(argv.id);
    }
});

yargs.command({
    command: "list",
    describe: "to list a guest",
    
    handler: function(){
        db.list();
    }
});

yargs.parse();

