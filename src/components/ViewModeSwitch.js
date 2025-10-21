import { useState } from 'react'
import { Grid, Table } from '../Icons'

export default function ViewModeSwitch({ view = 'grid', setView }) {
  const [mode, setMode] = useState(view)

  function setViewMode(newMode) {
    if (newMode === mode) return
    setMode(newMode)
    // call the setter passed from parent (App)
    setView(newMode)
  }

  const buttonBase =
    'flex items-center justify-center w-12 h-10 transition-transform'

  return (
    <div
      className="flex items-center h-12 px-1"
      role="toolbar"
      aria-label="View mode"
    >
      <button
        type="button"
        aria-pressed={mode === 'grid'}
        title="Grid view"
        className={`rounded-l-lg ${buttonBase} ${mode === 'grid' ? 'bg-neutral-300 scale-100' : 'bg-neutral-100 hover:bg-neutral-200'}`}
        onClick={() => setViewMode('grid')}
      >
        <Grid className="w-5 h-5" />
        <span className="sr-only">Grid view</span>
      </button>

      <button
        type="button"
        aria-pressed={mode === 'table'}
        title="List view"
        className={`rounded-r-lg ${buttonBase} ${mode === 'table' ? 'bg-neutral-300 scale-100' : 'bg-neutral-100 hover:bg-neutral-200'}`}
        onClick={() => setViewMode('table')}
      >
        <Table className="w-5 h-5" />
        <span className="sr-only">List view</span>
      </button>
    </div>
  )
}
