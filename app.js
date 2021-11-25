//backendRepo1

const express = require("express")
const fs = require("fs")

const app = express()
const port = 8080
// let visitas = 0

let filenameOriginal = "productos.txt";

let productos = [
    {
        "id": 1,
        "product": "lapiz",
        "price": 20,
    },
    {
        "id": 2,
        "product": "lapicero",
        "price": 25,
    },
    {
        "id": 3,
        "product": "pluma",
        "price": 30,
    },
];

app.listen(port, () => {
    try {
        let data = fs.readFileSync(filenameOriginal)
    } catch(e) { 
        console.log("No file")
    }
    console.log(`Servidor corriendo en el puerto ${port}`)
})

app.get('/', (request, response) => {
    response.send("Bienvenido al puerto 8080")
})

app.get('/productos', (request, response) => {
    let dataString = JSON.stringify(productos);
    fs.writeFileSync( filenameOriginal, dataString )
    response.send(`Los productos son ${dataString}`)
})

// app.get('/productos', (request, response) => {
//     visitas++;
//     fs.writeFileSync( "visitas", visitas.toString() )
//     response.send(`Las visitas son ${visitas}`)
// })

app.get('/productoRandom/:id', (request, response) => {
    console.log("Get Peticion Recibida")

    let id = request.params.id;
    let producto = productos.find( product => product.id == id)
    response.send(producto)
})