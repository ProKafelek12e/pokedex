import Filter from './filter'
import ViewModeSwitch from './ViewModeSwitch'

export default function NavBar({ view, setView, setSearch, selected, setSelected }) {
  return (
    <header className="w-full flex items-center justify-between gap-4 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-md shadow-sm sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-extrabold tracking-tight">Pokédex</h1>
      </div>

      <div className="flex-1 max-w-2xl">
        <label className="relative block">
          <span className="sr-only">Search Pokémon</span>
          <input
            type="search"
            placeholder="Search by name or # (e.g. pikachu, 25)"
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder-gray-400 text-sm"
            onChange={(e)=>{setSearch(e.target.value)}}
          />
        </label>
      </div>

        <Filter selected={selected} setSelected={setSelected}/>
      <div className="flex items-center gap-3">
        <ViewModeSwitch view={view} setView={setView} />
      </div>
    </header>
  )
}
