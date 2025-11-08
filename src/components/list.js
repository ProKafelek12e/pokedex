import { useState, useMemo } from 'react'
import NavBar from './navBar'
import Card from './card'
import Row from './row'
import NotFound from './notFound'

export default function List({ pokemons }) {
      const [view,setView] = useState('grid')
      const [search, setSearch] = useState("")
      const [selected, setSelected] = useState([])

  const selectedLower = useMemo(() => selected.map(s => s.toLowerCase()), [selected])

  const filtered = useMemo(() => {
    if (!pokemons) return []
    const searchNum = parseInt(search, 10)
    const hasSearch = search !== ''
    return pokemons.filter(p => {
      const matchesSearch =
        !hasSearch ||
        p.name.includes(search.toLowerCase()) ||
        (!isNaN(searchNum) && p.id === searchNum)
      const matchesType =
        selectedLower.length === 0 || p.types.some(t => selectedLower.includes(t.toLowerCase()))
      return matchesSearch && matchesType
    })
  }, [pokemons, search, selectedLower])



      if(view==='grid'){
        return (
          <>
            <NavBar view={view} setView={setView} setSearch={setSearch} selected={selected} setSelected={setSelected}/>
            <div className='flex justify-around flex-wrap gap-10 mx-10'>
            {filtered && filtered.map((pokemon)=>(
              ((pokemon.name.includes(search.toLowerCase()) || pokemon.id === parseInt(search)))?
                <Card key={pokemon.id} pokemon={pokemon}/>:null
              )
            )} 
            {filtered.length==0?<NotFound/>:null}
            </div>
          </>
        )
      }
      else{
        return (
          <>
            <NavBar view={view} setView={setView} setSearch={setSearch}/>
            {filtered && filtered.map((pokemon)=>(
              (pokemon.name.includes(search.toLowerCase()) || pokemon.id === parseInt(search))?
                <Row key={pokemon.id} pokemon={pokemon}/>:null
              )
            )} 
          </>
        )
      }
}
