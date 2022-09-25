
const fetch = require('node-fetch') 

const getPokemonsApi = async() => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=40`
    const res = await fetch(url);
    const {results} = await res.json()

    const data = await Promise.all(
        results.map( async (el) => {
            const respoke = await fetch(el.url)
            const datapoke = await respoke.json()
            const img = `http://play.pokemonshowdown.com/sprites/xyani/${el.name}.gif`
            const img2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${datapoke.id}.png`;
            return {   
                name: el.name,
                url : el.url,
                id : datapoke.id,
                img : img,
                imgArt: img2,
                types: datapoke.types,
                stats: datapoke.stats,
                height: el.height,
                weight: el.weight,
                hp: datapoke.stats[0].base_stat,
                atk: datapoke.stats[1].base_stat,
                def: datapoke.stats[2].base_stat,
                speed: datapoke.stats[3].base_stat,
            }})
    )  
    return data
}

module.exports = {getPokemonsApi}
