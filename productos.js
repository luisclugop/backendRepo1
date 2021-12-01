// const Contenedor = require('./Contenedor.js');

const Contenedor = require('./app.js');

const run = async function() {
    const cc = new Contenedor('productos.json')
    await cc.read()

    let id = await cc.save({ product: "pluma", price: 30 })
    console.log("Nuevo item con id: ", id)

    let productos = cc.getAll()
    console.log("Tamaño: ", productos.length)
    console.log("Producto: ", cc)
};

run();