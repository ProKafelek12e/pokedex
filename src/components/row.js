import { getBgStyle, toCapitalize } from '../lib';

export default function Row({ pokemon }) {
  return (
    <div className="w-full px-4 py-3 border-b border-gray-200 flex items-center gap-4">
      {/* image / graphic */}
      <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded bg-neutral-100">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-16 h-16 object-contain pixelated"
        />
      </div>

      {/* index + name */}
      <div className="flex-1 flex items-center gap-4">
        <span className="text-sm text-gray-500 font-mono">#{pokemon.id}</span>
        <h1 className="text-lg font-semibold">{toCapitalize(pokemon.name)}</h1>
      </div>

      {/* types aligned to the right */}
      <ul className="flex gap-2">
        {pokemon.types.map((type) => (
          <li
            key={type}
            style={getBgStyle(type)}
            className="flex items-center gap-2 px-2 py-1 rounded text-white text-sm font-bold"
          >
            <img
              className="h-5"
              src={`/types/${toCapitalize(type)}.webp`}
              alt={`${type} Element`}
            />
            <span>{toCapitalize(type)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
