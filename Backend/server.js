const dotenv = require("dotenv");

const app = require("./app");
const {connectDatabase} = require ("./config/database")

//config 

dotenv.config({path:"Backend/config/config.env"});

//connecting to database 
connectDatabase()

app.listen(process.env.PORT,() => {

    console.log(`The server is working on the port:http://localhost:${process.env.PORT}`)
})

