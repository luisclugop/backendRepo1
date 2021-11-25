//backendRepo1

const express = require("express")
const fs = require("fs")

const app = express()
const port = 3000
let visitas = 0

app.listen(port, () => {
    try {
        let data = fs.readFileSync("productos.txt")
    } catch(e) { 
        console.log("No file")
    }
    console.log(`Servidor corriendo en el puerto ${port}`)
})

app.get('/', (request, response) => {
    response.send("Bienvenido al puerto 3000")
})

app.get('/productos', (request, response) => {
    visitas++;
    fs.writeFileSync( "visitas", visitas.toString() )
    response.send(`Las visitas son ${visitas}`)
})

app.get('/productoRandom', (request, response) => {
    response.send("Bienvenido a el Producto que escogiste")
})