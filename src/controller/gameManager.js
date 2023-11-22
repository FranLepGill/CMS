const e = require('express');
const { readData, writeData } = require('./jsonManager');

function existsGame(id) {
    console.log(id);
    const data = readData();
    const gameData = data.juegos.find(juegos => juegos.id == id);
    if (!gameData) {
        return false;
    }
    return true;
}

function createGame(id, titulo, descripcion) {
  const game = new GameModel(id, titulo, descripcion);
  game.save();
}

function getGame(id) {

  const data = readData();

  // Busca el juego con la ID proporcionada en los datos
  const gameData = data.juegos.find(juegos => juegos.id == id);

  // Si no se encuentra el juego, retorna null
  if (!gameData) {
    return null;
  }

  // Crea una instancia de GameModel con los datos encontrados
  const gameInstance = new GameModel(gameData.id, gameData.titulo, gameData.descripcion);

  return gameInstance;
}

function delGame(id) {
  data = getGame(id);
  data.delete();
}

module.exports = {
  existsGame,
  createGame,
  getGame,
  delGame
};
  
const { GameModel } = require('../models/game');