const typeColorString = "normal#a0a0a0,fighting#ca436a,flying#93afde,poison#aa6aca,ground#aa6aca,rock#cebe83,bug#cebe83,ghost#cebe83,steel#598da1,fire#ea954f,water#579ad6,grass#64b669,electric#f6d34a,psychic#fc7676,ice#73cec2,dragon#0472bc,dark#0472bc,fairy#0472bc"

  // parse into a map: { normal: "a0a0a0", ... }
  const typeColorMap = Object.fromEntries(
    typeColorString
      .split(',')
      .map((pair) => {
        const [name, code] = pair.split('#').map((s) => s && s.trim())
        return [name, code]
      })
      .filter(([name, code]) => name && code)
  )
  // returns inline style fallback { backgroundColor: '#a0a0a0' } — useful if Tailwind JIT doesn't pick up dynamic classes
  export function getBgStyle(typeName) {
    const code = typeColorMap[typeName]
    return code ? { backgroundColor: `#${code}` } : {}
  }