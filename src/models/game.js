const { readData, writeData } = require('../controller/jsonManager');
const { getGame, existsGame } = require('../controller/gameManager');

class GameModel {
    constructor(id, titulo, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
        this.titulo = titulo;
    }

    // Método para guardar el juego en la base de datos
    save() {

        if (existsGame(this.id)) {
            console.log(`El juego ${this.titulo} ya existe en la base de datos.`);
        }else{

            // Lee los datos existentes desde el archivo
            const existingData = readData();

            // Agrega el nuevo juego a los datos existentes
            existingData.juegos = existingData.juegos || [];

            existingData.juegos.push({
                id: this.id,
                titulo: this.titulo,
                descripcion: this.descripcion
            });

            // Guarda los datos actualizados en el archivo JSON
            writeData(existingData);

            // Lógica para guardar en la base de datos (puede variar según el sistema utilizado)
            console.log(`Guardando juego ${this.titulo} en la base de datos.`);
        
        }
    }

    // Método para actualizar el juego en la base de datos
    update() {
        // Lógica para actualizar en la base de datos
        console.log(`Actualizando información del juego ${this.titulo}.`);
    }

    // Método para eliminar el juego de la base de datos
    delete(id) {
        // const data = readData();

        // const data2 = data.juegos.find(juegos => juegos.id !== id);

        // console.log(data2);
        
        // writeData(data2);
        // Lógica para eliminar de la base de datos
        console.log(`Falta implementar`);
    }

    // Método para obtener información del juego
    getInfo() {
        return {
            id: this.id,
            titulo: this.titulo,
            descripcion: this.descripcion
        };
    }
}

module.exports = {GameModel};
