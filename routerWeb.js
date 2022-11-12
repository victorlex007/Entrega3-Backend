const { application } = require("express")

//web servers
function controladorGetRoot(req, res){
    res.send("todo joya");
}

function controladorGetBienvenida(req, res){
    res.send("Buenas!");
}

function controladorGetDespedida(req, res){
    res.send("Chau");
}

const routerWeb = express.Router()
routerApi.get("/", controladorGetRoot)
routerApi.get("/bienvenida", controladorGetBienvenida)
routerApi.get("/despedida", controladorGetDespedida)


exports.routerWeb = routerWeb;