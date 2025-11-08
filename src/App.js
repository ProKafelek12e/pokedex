import { useEffect, useState } from 'react';
import './App.css';
import List from './components/list';

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
      <List pokemons={pokemons}/>
    </div>
  );
}

export default App;
