export const filter = (type, currentPage, pokemons, order, key)=>{
    let orderedPokemons = [];
    if (order){
        orderedPokemons = pokemons.sort((b,a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
    }
    orderedPokemons = pokemons.sort((a,b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

    if(type === 'All'){
        return orderedPokemons.slice(currentPage, currentPage+12);
    }
    let filteredPokes = orderedPokemons.filter(poke=> poke.type === type);

    return filteredPokes.slice(currentPage, currentPage+12);
}