const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {

    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   primaryKey: true,
    // },
    name: {
        type: DataTypes.ENUM(
        "bug",
        "dragon",
        "electric",
        "fairy",
        "fighting",
        "fire",
        "flying",
        "grass",
        "ground",
        "ghost",
        "ice",
        "normal",
        "poison",
        "psychic",
        "rock",
        "water",
        "dark",
        "steel"
       ),
    },

  })

};
