const { Router } = require('express');
const { createGame, getGame, delGame } = require('../controller/gameManager');
const router = Router();
const { readData, crearBD } = require('../controller/jsonManager');  // Agregado para leer datos

router.get('', (req, res) => {
    crearBD();
    const gameData = readData();  // Agregado para leer datos
    res.json(gameData);
});

router.get('/:id', (req, res) => {
    crearBD();
    const gameData = getGame(req.params.id);
    res.json(gameData);
});

router.post('/', (req, res) => {
    crearBD();
    const data = {
        "id": req.body.id,
        "titulo": req.body.titulo,
        "descripcion": req.body.descripcion
    };
    createGame(data.id, data.titulo, data.descripcion);
    res.json('creado');
});

router.delete('/:id', (req, res) => {
    delGame(req.params.id);
    res.json('eliminado');
});

module.exports = router;
