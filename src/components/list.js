import { useState } from 'react'
import NavBar from './navBar'
import Card from './card'
import Row from './row'

export default function List({ pokemons }) {
      const [view,setView] = useState('grid')
      const [search, setSearch] = useState("")
      if(view==='grid'){

        return (
          <>
            <NavBar view={view} setView={setView} setSearch={setSearch}/>
            {pokemons && pokemons.map((pokemon)=>(
              (pokemon.name.includes(search)||pokemon.id==parseInt(search))?
                <Card pokemon={pokemon}/>:null
              )
            )} 
          </>
        )
      }
      else{
        return (
          <>
            <NavBar view={view} setView={setView} setSearch={setSearch}/>
            {pokemons && pokemons.map((pokemon)=>(
              (pokemon.name.includes(search)||pokemon.id==parseInt(search))?
                <Row pokemon={pokemon}/>:null
              )
            )} 
          </>
        )
      }
}
