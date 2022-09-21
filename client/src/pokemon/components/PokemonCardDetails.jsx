import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import logo from '../assets/whoIs.png'
import { getPokemonsbyid } from "../helpers";

export const PokemonCardDetails = () => {
    
    
    const [pokemons, setPokemons] = useState({})
    const {pokeid} = useParams(); 
    
    useEffect(() => {
        const getPage = async()=>{
            const arr=await getPokemonsbyid(pokeid)
            setPokemons(arr);
          }
        getPage();
      }, [pokeid])
      
      const {name, id, imgArt} = pokemons;
      //console.log(pokemons.types)
    return (
        <>
            <div className='container__card-container'>
    
                <div className={`container__card-container__card`}
                >
                        <p className='container__card-container__card-pokedex'>
                            PÓKEDEX   
                            <span className="span-card">  {id}</span>
                        </p>
                        <Link to={`/pokemon/${id}`}>
                            <img onError={e=>{e.target.src = logo}} src={imgArt} alt={name} />
                        </Link>
    
                        <h2 className='container__card-container__card-name'>{name}</h2>
    
                        <div className='container__card-container__card-types'>
                        {/* {pokemons.types.map(el=>(
                            <span key={el.slot} className={`span-types-${el.type.name}`}> {el.type.name} </span>
                        ))} */}
                        </div>
    
                </div>
    
            </div>
        </>
      )
}
