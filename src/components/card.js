import { getBgStyle, toCapitalize } from '../lib';

export default function Card({ pokemon }) {
  return (
    <div
          key={pokemon.id}
          className="w-[315px] h-[440px] rounded-xl border-8 border-yellow-300 overflow-hidden"
        >
          <div className="w-full h-full bg-neutral-200 p-4 flex flex-col items-center gap-3">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="ratio-square w-[280px] h-[280px] object-contain pixelated rounded-md"
              style={{
                backgroundColor:"whitesmoke"
              }}
            />
            <h1 className="text-lg font-semibold">#{pokemon.id} {toCapitalize(pokemon.name)}</h1>
            <ul className="flex flex-row gap-2">
              {pokemon.types.map((type) => (
                <li style={getBgStyle(type)} className="px-2 py-[2px] rounded text-white font-bold flex flex-row items-center justify-around" key={type}>
                  <img className='h-7' src={`/types/${toCapitalize(type)}.webp`} alt={`${type} Element`}></img>
                  {toCapitalize(type)}
                </li>
              ))}
            </ul>
          </div>
        </div>
  )
}
