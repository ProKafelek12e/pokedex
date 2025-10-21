import { useState } from 'react'
import { Grid, Table } from './Icons'

export default function ViewModeSwitch({ value = 'grid', onChange } = {}) {
  const [mode, setMode] = useState(value)

  function setView(newMode) {
    if (newMode === mode) return
    setMode(newMode)
    if (typeof onChange === 'function') onChange(newMode)
  }

  const buttonBase =
    'flex items-center justify-center w-12 h-10 transition-transform'

  return (
    <div
      className="bg-neutral-300 rounded-lg flex items-center h-12 px-1 absolute top-10 right-10 shadow-md"
      role="toolbar"
      aria-label="View mode"
    >
      <button
        type="button"
        aria-pressed={mode === 'grid'}
        title="Grid view"
        className={`rounded-l-lg ${buttonBase} ${mode === 'grid' ? 'bg-white shadow-md scale-100' : 'bg-transparent hover:bg-neutral-200'}`}
        onClick={() => setView('grid')}
      >
        <Grid className="w-5 h-5" />
        <span className="sr-only">Grid view</span>
      </button>

      <button
        type="button"
        aria-pressed={mode === 'table'}
        title="List view"
        className={`rounded-r-lg ${buttonBase} ${mode === 'table' ? 'bg-white shadow-md scale-100' : 'bg-transparent hover:bg-neutral-200'}`}
        onClick={() => setView('table')}
      >
        <Table className="w-5 h-5" />
        <span className="sr-only">List view</span>
      </button>
    </div>
  )
}
