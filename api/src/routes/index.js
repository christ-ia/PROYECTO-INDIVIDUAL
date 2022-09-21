const { Router } = require('express');
const { getAllPokemons } = require('../helpers/getAllPokemons');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


getAllPokemons();


module.exports = router;
