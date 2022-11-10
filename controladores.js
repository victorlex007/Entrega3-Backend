const express = require("express")

const cosas =[]
let num = 1

function controladorGetRoot(req, res){
    res.send("todo joya")
}

function controladorGetBienvenida(req, res){
    res.send("Buenas!")
}

function controladorGetDespedida(req, res){
    res.send("Chau")
}

function controladorGetCosas(req, res){
    res.json(cosas)
}


function controladorPostCosas(req, res){
    num++
    cosas.push(num)
    res.json({mensaje: `numero cargado: ${num}`})
}

//
const app = express()

//web servers
app.get("/", controladorGetRoot)
app.get("/bienvenida", controladorGetBienvenida)
app.get("/despedida", controladorGetDespedida)


//api ejemplo
app.get("/cosas", (req, res) => {
    let stringCosas = ""
    for (const num of cosas){
        stringCosas += num + ","
    }
    res.json({stringCosas})
})

//api rest
app.get("/api/cosas", controladorGetCosas)
app.post("/api/cosas", controladorPostCosas)

const server = app.listen(8080)