export const getPokemonsbyid = async(pokeid) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeid}/`
    const res = await fetch(url);
    const {name, types, id, stats} = await res.json()
    const imgArt = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeid}.png`

    const atk = stats[1].base_stat

    return{
        name,
        types,
        id,
        imgArt,
        atk
    }

}