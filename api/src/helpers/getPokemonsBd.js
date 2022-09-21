const {Pokemon, Types} = require('../db')

const getPokemonsBd = async()=>{

    return Pokemon.findAll()//{
        // include :{
        //     model: Types,
        //     //attributes: ["name"],
        //     // through: {
        //     //     attributes:[]
        //     // }
        //  }
    // })
}

module.exports = {getPokemonsBd}