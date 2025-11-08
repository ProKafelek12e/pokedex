export default function NotFound({ onReset = () => {} }) {
  return (
    <div className="w-[calc(100vw-80px)] flex items-center justify-center py-12">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">No Pokémon found</h2>
        <p className="text-sm text-gray-500 mb-4">
          We couldn't find any Pokémon matching your search or filters. Try a different name, number, or remove filters.
        </p>
      </div>
    </div>
  )
}
