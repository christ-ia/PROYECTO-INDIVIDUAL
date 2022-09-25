const { Router } = require('express');
const fetch = require('node-fetch') ;
const { Op } = require('sequelize');

const { getAllPokemons } = require('../helpers/getAllPokemons');
const { Pokemon, Type } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/pokemons', async( req, res )=>{
    const {name} = req.query;
    const allPokemons = await getAllPokemons();
    if(name){
        const pokemon = allPokemons.filter( el =>el.name.toLowerCase() === name.toLocaleLowerCase());
        pokemon.length
            ?res.send(pokemon)
            :res.status(404).send('Personaje no encontrado')
        return;
    }

    res.send(allPokemons)

});

router.get('/pokemons/:id', async(req, res)=>{
    console.log(req.params)
    const {id} = req.params;
    const allPokemons = await getAllPokemons();

    const pokemon = allPokemons.filter( el =>el.id == id);
    pokemon.length
        ?res.send(pokemon)
        :res.status(404).send('Personaje no encontrado');

} )

router.post('/pokemons', async ( req, res )=>{

    const { name, hp, defense, speed, height, weight, types } = req.body;

    const verif = await Pokemon.findAll( { where: {name: name} })

    console.log(verif)
    if (verif.length){
        res.status(400).send(`pokemon con el nombre ${name} ya existe`);
        return;
    }
    
    const newPokemon = await Pokemon.create({ name, hp, defense, speed, height, weight });

    const typesDb = await Type.findAll({
        where: {
            name: {
                [Op.or]: types
            }
        }
    } )

    newPokemon.addType(typesDb);

    res.send('creado corresctamente')
})

router.get('/types', async( req, res )=>{
    const data = await fetch('https://pokeapi.co/api/v2/type/');
    const { results } = await data.json();

    const types = results.map( el=> el.name.replace(/^\w/, (c) => c.toUpperCase()));
    
    types.forEach( el => {
        Type.findOrCreate({
            where:{name:el}
        })
    });

    res.send(await Type.findAll());

})



module.exports = router;
