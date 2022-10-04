import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputCreatePokemon } from '../components/InputCreatePokemon';
import Logo from '../assets/whoIs.png'
import './styles/CreatePokemon.scss';
import { initCharacters } from '../reducers/actionsCreator'
import { CheckBoxCreatePokemon } from '../components/CheckBoxCreatePokemon';
import { useNavigate } from 'react-router-dom';


export const CreatePokemon = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const [name, setName] = useState({value: '', isValid: null});
  const [weight, setWeight] = useState({value: '', isValid: null});
  const [height, setHeight] = useState({value: '', isValid: null});
  const [hp, setHp] = useState({value: '', isValid: null});
  const [attack, setAttack] = useState({value: '', isValid: null});
  const [defense, setDefense] = useState({value: '', isValid: null});
  const [speed, setSpeed] = useState({value: '', isValid: null});
  const [type, setType] = useState([]);
  const [validCheckBox, setValidCheckBox] = useState(null)
  const [validForm, setValidForm] = useState(null);
  
  const {allPokemons,} = useSelector(state=>state);

  useEffect(() => {
    dispatch(initCharacters())
  }, [dispatch]);


  const conditions ={
    name: /^[a-zA-Z0-9_-]{4,20}$/,
    weight: /^([1-9]|[1-9]\d|[1-9]\d\d|1000)$/,
    height: /^([1-9]|[1]\d|20)$/,
    hp: /^([1-9]|[1-9]\d|[1-4]\d\d|500)$/,
    attack: /^([1-9]|[1-9]\d|[1][0-8]\d|190)$/,
    defense: /^([1-9]|[1-9]\d|[1-2][0-2]\d|230)$/,
    speed: /^([1-9]|[1-9]\d|[1]\d\d|200)$/,
  }


  const handleSubmit = async e=>{
    e.preventDefault();
    
    if (
        name.isValid &&
        weight.isValid &&
        height.isValid &&
        attack.isValid &&
        defense.isValid &&
        speed.isValid &&
        validCheckBox
        ){

          const form = {
            name: name.value,
            weight: weight.value,
            hp:hp.value,
            height: height.value,
            attack: attack.value,
            defense: defense.value,
            speed: speed.value,
            Types: type
          }
          
          try {
            let config = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(form)
            }
            console.log(config)
            let res = await fetch('http://localhost:3001/pokemons/', config);
            let resp = await res.json();
            console.log(resp)
          } catch (error) {
             console.error(error)
          }

          setName({value: '', isValid: null});
          setWeight({value: '', isValid: null});
          setHeight({value: '', isValid: null});
          setHp({value: '', isValid: null});
          setAttack({value: '', isValid: null});
          setDefense({value: '', isValid: null});
          setSpeed({value: '', isValid: null});
          setValidCheckBox(null)
          setType([])
          setTimeout(() => {
            navigate('/pokedex')
          }, 1500);

        }else{
          if(name.isValid === null) {setName( {...name, isValid: false} ); setValidForm(false)}; 
          if (weight.isValid === null) {setWeight( {...weight, isValid: false} ); setValidForm(false)}; 
          if (height.isValid === null) {setHeight( {...height, isValid: false} ); setValidForm(false)}; 
          if (hp.isValid === null) {setHp( {...hp, isValid: false} ); setValidForm(false)};
          if (attack.isValid === null) {setAttack( {...attack, isValid: false} ); setValidForm(false)}; 
          if (defense.isValid === null) {setDefense( {...defense, isValid: false} ); setValidForm(false)}; 
          if (speed.isValid === null) {setSpeed( {...speed, isValid: false} ); setValidForm(false)}; 
        }


  }


  return (
    <div className='create-pokemon__container'>
        <div className='create-pokemon__card-container'>
          <img src={Logo} alt="logo" /> 
          <div className='card-container__card-types'>
              {type.map( (el,i) =>(
                  <span key={i} className={`span-types-${el}`}> {el} </span>
              ))}
          </div>
        </div>
        <div className='create-pokemon-check-boxes'>        
           <p className={
              `create-pokemons__checkbox-message${
                (validCheckBox === false)?'-enabled':''
              }`
            }>you must mark one or two types of pokemon</p>
          <CheckBoxCreatePokemon 
            newPokemonType={type} 
            setNewPokemonType={setType}
            validate = {setValidCheckBox}
          />
        </div>

        <form className='create-pokemon__form' id='create-form' >

            <InputCreatePokemon 
                label="Name" 
                inputState = {name}
                setInputState = {setName}
                placeholder= "Pikachu" 
                type="text" 
                errMessage="Name must be between 4 and 20 characters, only letters, hyphen, underscore. No spaces"
                condition=  {conditions.name}
                isUnique = {allPokemons}
            />
            <InputCreatePokemon 
                label="Weight" 
                inputState = {weight}
                setInputState = {setWeight}
                placeholder= "60" 
                type="number" 
                errMessage="Weigth must be between 1 and 1000"
                condition=  {conditions.weight}
            />
            <InputCreatePokemon 
                label="Height" 
                inputState = {height}
                setInputState = {setHeight}
                placeholder= "4" 
                type="number" 
                errMessage="Height must be between 1 and 20"
                condition=  {conditions.height}
            />
            <InputCreatePokemon 
                label="HP" 
                inputState = {hp}
                setInputState = {setHp}
                placeholder= "35" 
                type="number" 
                errMessage="HP must be between 1 and 500"
                condition=  {conditions.hp}
            />
            <InputCreatePokemon 
                label="Attack" 
                inputState = {attack}
                setInputState = {setAttack}
                placeholder= "55" 
                type="number" 
                errMessage="Attack must be between 1 and 190"
                condition=  {conditions.attack}
            />
            <InputCreatePokemon 
                label="Defense" 
                inputState = {defense}
                setInputState = {setDefense}
                placeholder= "40" 
                type="number" 
                errMessage="Defense must be between 1 and 230"
                condition=  {conditions.defense}
            />
            <InputCreatePokemon 
                label="Speed" 
                inputState = {speed}
                setInputState = {setSpeed}
                placeholder= "50" 
                type="number" 
                errMessage="Speed must be between 1 and 200"
                condition=  {conditions.speed}
            />
       
        </form>
            <div className='create-pokemon__button'>
              {validForm === true && <p className='create-pokemon__success-create'>Success!</p>}
              {validForm === false &&<div className='create-pokemon__error-create'>
                <p><b>Opps!</b> some thing wasn't rigth </p>
              </div>}
              <button 
                className="create-pokemon__button-btn" 
                type='submit'
                onClick={handleSubmit}
                form='create-form'
                disabled ={!validForm}
                onc
                >Create</button>
            </div>
        


  </div>)
}
