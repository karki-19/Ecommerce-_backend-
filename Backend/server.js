const dotenv = require("dotenv");

const app = require("./app");
const {connectDatabase} = require ("./config/database");

//Handling Uncaught Exception




//config 

dotenv.config({path:"Backend/config/config.env"});

//connecting to database 
connectDatabase()

const server = app.listen(process.env.PORT,() => {

    console.log(`The server is working on the port:http://localhost:${process.env.PORT}`)
})

// unhandeled Promise Rejection 

process.on("unhandledRejection",(err)=>{
    console.log(`Error :${err.message}`)
    console.log(`Shutting down the server due to Unhandled rejecton `)
    server.close();
    process.exit(1);
})

