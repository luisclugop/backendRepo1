const fs = require("fs")

class Contenedor {
    constructor(filename = "productos.json"){
        console.log("Iniciando Contenedor")
        this.id = 0;
        this.list = [];
        this.filename = filename;

        this.read();
    }

    read(){
        const data = fs.readFileSync(this.filename)
        const listaFromFile = JSON.parse(data);

        for( const objeto of listaFromFile) {
            this.save(objeto)
        }
    }

    save(objeto){
        objeto.id = ++this.id;
        this.list.push(objeto);
    }
}

module.exports = Contenedor;