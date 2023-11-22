const fs = require('fs');

const dataFilePath = '../BD.json';

// Función para leer datos desde el archivo JSON
function readData() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // Si el archivo no existe o hay un error al leerlo, devolver un objeto vacío
    return {};
  }
}

// Función para escribir datos en el archivo JSON
function writeData(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataFilePath, jsonData, 'utf8');
}

module.exports = {
  readData,
  writeData
};
