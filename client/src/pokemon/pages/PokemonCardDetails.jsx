import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import logo from '../assets/whoIs.png';
import { getPokemonsbyid } from "../helpers";
import './styles/PokemonCardDetails.scss'
import { useDispatch, useSelector } from "react-redux";
import { IsLoading } from "../components/IsLoading";

export const PokemonCardDetails = () => {

    const [poke, setPoke] = useState({});
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state=>state)

    const {pokeid} = useParams();
    
    useEffect(() => {
        const getPokemon = async()=>{
            dispatch({type:'SET_ISLOADING_TRUE'})
            const pokemon = await getPokemonsbyid(pokeid);
            dispatch({type:'SET_ISLOADING_FALSE'})
            setPoke(pokemon)
        }
        getPokemon()
    }, [pokeid, dispatch])
    
    if (isLoading) return <IsLoading />

    const {id, name, defense, attack, hp, speed, height, weight, Types} = poke;
    let {imgArt} = poke;
    

    if (imgArt === 'no-image') imgArt = logo;

    return (
        <div className="card-details__container">
            <div className="card-details__img-card">
            <img src={imgArt} alt={name} />

            </div>
            <h2 className="card-details__title">{name?.replace(/^\w/, (c) => c.toUpperCase())}</h2>
            <div className="card-details__features">

                <div className="card-details__features-item">
                    <p className="features-item__name">Pokedex</p>
                    {(typeof(id) === 'number')
                        ?<p className="features-item__value">{id}</p>
                        :<p className="features-item__value">Not Official</p>
                    }
                </div>
                <div className="card-details__features-item">
                    <p className="features-item__name">Weight</p>
                    <p className="features-item__value">{weight}</p>
                </div>
                <div className="card-details__features-item">
                    <p className="features-item__name">Height</p>
                    <p className="features-item__value">{height}</p>
                </div>
            </div>
                <div className="card-details__stats">
                    <h3 className="card-details__stats-title">BASE STATS</h3>
                    <div className="card-details__stats-item">
                        <p className="stats-item__name">Attack</p>
                        <p className="stats-item__value">{attack}</p>
                    </div>
                    <div className="card-details__stats-item">
                        <p className="stats-item__name">Defense</p>
                        <p className="stats-item__value">{defense}</p>
                    </div>
                    <div className="card-details__stats-item">
                        <p className="stats-item__name">HP</p>
                        <p className="stats-item__value">{hp}</p>
                    </div>
                    <div className="card-details__stats-item">
                        <p className="stats-item__name">Speed</p>
                        <p className="stats-item__value">{speed}</p>
                    </div>
                </div>
            <div className="card-details__types">
            <h3 className="card-details__types-title">Type:</h3>
                { Types?.map((el,i)=> (
                    <div key={i} className="card-details__types-item">
                        <p className={`types-item-${el.name}`}> {el.name} </p>
                    </div>
                ) )}
            </div>


        </div>
      )
}
