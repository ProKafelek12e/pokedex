import { useEffect, useState } from 'react';
import './App.css';
import ViewModeSwitch from './ViewModeSwitch';
import { getBgStyle } from './lib';

function App() {
  const [pokemons,setPokemons] = useState(null)

  async function getData(){

    const pokemonsArray = []
    try{
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then(e => e.json())
        for(let item of data.results){
          const pokeData = await fetch(item.url)
          const pokeJson = await pokeData.json()
          let pokemon = {
            id:pokeJson.id,
            name:pokeJson.name,
            types:[],
            stats:{
              hp:pokeJson.stats[0].base_stat,
              attack:pokeJson.stats[1].base_stat,
              defense:pokeJson.stats[2].base_stat,
              sp_attack:pokeJson.stats[3].base_stat,
              sp_defense:pokeJson.stats[4].base_stat,
              speed:pokeJson.stats[5].base_stat,
            },
            image:pokeJson.sprites.versions["generation-v"]["black-white"].front_default
          }
          for(let i=0; i<pokeJson.types.length;i++){
            pokemon.types.push(pokeJson.types[i].type.name)
          }
          pokemonsArray.push(pokemon)
          
        }
        setPokemons(pokemonsArray)
    }
    catch(error){
        console.log(error)
    }
}
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App flex flex-row flex-wrap justify-between gap-4">
      <ViewModeSwitch/>
      {pokemons && pokemons.map((pokemon)=>(
        <div
          key={pokemon.id}
          className="w-[315px] h-[440px] rounded-xl border-8 border-yellow-300 overflow-hidden"
        >
          <div className="w-full h-full bg-neutral-200 p-4 flex flex-col items-center gap-3">
            {console.log(pokemon)}
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="ratio-square w-[280px] h-[280px] object-contain pixelated bg-white rounded-md"
            />
            <h1 className="text-lg font-semibold">#{pokemon.id} {pokemon.name}</h1>
            <ul className="flex flex-row gap-2">
              {pokemon.types.map((type) => (
                <li style={getBgStyle(type)} className="px-2 py-[2px] rounded" key={type}>
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
