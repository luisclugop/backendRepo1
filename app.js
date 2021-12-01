//backendRepo1
const express = require("express");
const Contenedor = require('./Contenedor.js');

const app = express()
const port = 8080
const contenedor = new Contenedor()

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})

app.get('/', (request, response) => {
    response.send("Bienvenido al puerto 8080")
})

app.get('/productos', (request, response) => {
    response.json(contenedor.list)
    console.log("Bienvenido a los productos del puerto 8080")
})

app.get('/productoRandom/:id', (request, response) => {
    console.log("Get Peticion Recibida")

    let id = request.params.id;
    let producto = productos.find( product => product.id == id)
    response.send(producto)
})

app.get('/productoRandom/:id', (request, response) => {
    console.log("Get Peticion Recibida")

    let id = request.params.id;
    let producto = productos.find( product => product.id == id)
    response.send(producto)
})

// class Contenedor {
    // constructor(fileName){
    //     console.log("Iniciando Contenedor")
    //     this.file = fileName
    //     this.countID = 0
    // }

    // async read() {
    //     try {
    //         let dataRead = await fs.promises.readFile(this.file)
    //         this.productos = JSON.parse(dataRead)

    //         for( const element of this.productos ) {
    //             if(element.id > this.countID) this.countID = element.id
    //         }

    //         console.log("Last ID: ", this.countID)  
    //     } catch(error) {
    //         console.log("Aun no hay archivo")
    //     }
    // }

    // async write() {
    //     try {
    //         let string = JSON.stringify(this.productos)
    //         await fs.promises.writeFile(this.file, string)
    //     } catch(error) { 
    //         console.log("No se puede escribir", error)
    //     }
    // }

    // async save( objeto ) {
    //     this.countID++;
    //     objeto["id"] = this.countID;

    //     this.productos.push(objeto);

    //     await this.write()

    //     return this.countID;
    // }

    // getAll() {
    //     try {
    //         return this.productos
    //     } catch(error) { 
    //         console.log("No file", error)
    //     }
    // }
// }













// let visitas = 0

// let filenameOriginal = "productos.txt";

// let productos = [
//     {
//         "id": 1,
//         "product": "lapiz",
//         "price": 20,
//     },
//     {
//         "id": 2,
//         "product": "lapicero",
//         "price": 25,
//     },
//     {
//         "id": 3,
//         "product": "pluma",
//         "price": 30,
//     },
// ];

// app.listen(port, () => {
//     try {
//         let data = fs.readFileSync(filenameOriginal)
//     } catch(e) { 
//         console.log("No file")
//     }
//     console.log(`Servidor corriendo en el puerto ${port}`)
// })

// app.get('/', (request, response) => {
//     response.send("Bienvenido al puerto 8080")
// })

// app.get('/productos', (request, response) => {
//     let dataString = JSON.stringify(productos);
//     fs.writeFileSync( filenameOriginal, dataString )
//     response.send(`Los productos son ${dataString}`)
// })

// app.get('/productos', (request, response) => {
//     visitas++;
//     fs.writeFileSync( "visitas", visitas.toString() )
//     response.send(`Las visitas son ${visitas}`)
// })

// app.get('/productoRandom/:id', (request, response) => {
//     console.log("Get Peticion Recibida")

//     let id = request.params.id;
//     let producto = productos.find( product => product.id == id)
//     response.send(producto)
// })
