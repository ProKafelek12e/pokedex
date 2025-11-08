import { useState, useMemo } from 'react'
import NavBar from './navBar'
import Card from './card'
import Row from './row'
import NotFound from './notFound'
import Loading from './loading'

export default function List({ pokemons, loaded }) {
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

        return (
          <>
            <NavBar view={view} setView={setView} setSearch={setSearch} selected={selected} setSelected={setSelected}/>
            <div className='flex justify-around flex-wrap gap-10 mx-10'>
            {filtered && filtered.map((pokemon)=>
              (view==='grid'?
                <Card key={pokemon.id} pokemon={pokemon}/>:
                <Row key={pokemon.id} pokemon={pokemon}/>
              )
            )} 
            {loaded===false ? <Loading/> : null}
            {loaded===true && filtered.length===0?<NotFound/> : null}
            </div>
          </>
        )
}
