const express = require("express");
const {routerWeb} = require ("./routerWeb.js");

//_____________

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//rutas
app.use("/", routerWeb)
app.use("api", routerApi)



const server = app.listen(8080)
