const express = require("express");
const {randomUUID} = require ("crypto");

const cosas =[]


//_____________
function enRango(num, min = 0, max=10000){
    return num >= min && num <= max
}



function controladorGetCosas({query}, res){
    let resultado
    if (query.min || query.max ){
        resultado =cosas.filter(({precio})=> enRango(precio, query.min, query.max))
    }else{
         resultado = cosas 
    }
  res.json(resultado)
}


function controladorPostCosas(req, res){
    const cosaNueva = req.body
    cosaNueva.id = randomUUID()
    cosas.push(req.body)
    res.status(201)
    res.json(req.body)
}

function controladorGetCosasSegunId({ params:{id}}, res){
    const buscado=cosas.find(c => c.id===id)
    if (!buscado){
        res.status(404)
        res.json({mensaje:`no se encontro el id (${id})`})
    }else{
          res.json(buscado)  
    }

}



function controladorPutCosasSegunId({ body, params:{id}}, res){
    const indexBuscado=cosas.findIndex(c => c.id===id)
    if (indexBuscado === -1){
        res.status(404)
        res.json({mensaje:`no se encontro el id (${id})`})
    }else{
        cosas[indexBuscado]= body
          res.json(body)  
    }

}

function controladorPatchCosasSegunId({ body, params:{id}}, res){
    const indexBuscado=cosas.findIndex(c => c.id===id)
    if (indexBuscado === -1){
        res.status(404)
        res.json({mensaje:`no se encontro el id (${id})`})
    }else{
        cosas[indexBuscado]= {...cosas[indexBuscado], ...body } 
          res.json(cosas[indexBuscado])
    }

}

function controladorDeleteCosasSegunId({ params:{id}}, res){
    const indexBuscado=cosas.findIndex(c => c.id===id)
    if (indexBuscado === -1){
        res.status(404)
        res.json({mensaje:`no se encontro el id (${id})`})
    }else{
        const borrados = cosas.splice(indexBuscado, 1)
          res.json(borrados[0])
    }

}
//api rest
const routerApi =express.Router()
app.get("/cosas", controladorGetCosas)
app.get("/cosas/:id", controladorGetCosasSegunId)
app.post("/cosas", controladorPostCosas)
app.put("/cosas/:id", controladorPutCosasSegunId)
app.patch("/cosas/:id", controladorPatchCosasSegunId)
app.delete("/cosas/:id", controladorDeleteCosasSegunId)

exports.routerApi = routerApi;