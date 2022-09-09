import { Link } from "react-router-dom";
import logo from '../assets/whoIs.png'

export const PokemonCard = ({name, types, id, imgArt, atk}) => {

  return (
    <>
        <div className='container__card-container'>

            <div className={`container__card-container__card-${types[0].type.name}`}
            >
                    <div className="container__card-container__card-head">
                        <p className='container__card-container__card-head-pokedex'>
                            Pókedex  
                            <span className="span-card">  {id}</span>
                        </p>
                        <p className='container__card-container__card-head-pokedex'>
                            ATK   
                            <span className="span-card">  {atk}</span>
                        </p>
                    
                    </div>
                    <Link to={`/pokemon/${id}`}>
                        <img onError={e=>{e.target.src = logo}} src={imgArt} alt={name} />
                    </Link>

                    <h2 className='container__card-container__card-name'>{name}</h2>

                    <div className='container__card-container__card-types'>
                        {types.map(el=>(
                            <span key={el.slot} className={`span-types-${el.type.name}`}> {el.type.name} </span>
                        ))}
                    </div>

            </div>

        </div>
    </>
  )
}
