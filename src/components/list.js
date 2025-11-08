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
            <div className='flex justify-around flex-wrap gap-10 mx-10'>
            {pokemons && pokemons.map((pokemon)=>(
              (pokemon.name.includes(search) || pokemon.id === parseInt(search))?
                <Card pokemon={pokemon}/>:null
              )
            )} 
            </div>
          </>
        )
      }
      else{
        return (
          <>
            <NavBar view={view} setView={setView} setSearch={setSearch}/>
            {pokemons && pokemons.map((pokemon)=>(
              (pokemon.name.includes(search) || pokemon.id === parseInt(search))?
                <Row pokemon={pokemon}/>:null
              )
            )} 
          </>
        )
      }
}
