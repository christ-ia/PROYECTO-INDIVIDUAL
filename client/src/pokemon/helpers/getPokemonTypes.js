export const getPokemonTypes = (types)=>{
    return types.map(el => el.type.name.toLowerCase())
}
