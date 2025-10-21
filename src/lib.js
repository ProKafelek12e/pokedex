const typeColorString = "normal#919ba3,fighting#e0306a,flying#89aae3,poison#b667cf,ground#e87236,rock#c7b685,bug#83c300,ghost#4c69b1,steel#598da1,fire#ff9741,water#3592dc,grass#38bf4b,electric#fbd100,psychic#fe6675,ice#4dd1c0,dragon#016fc9,dark#016fc9,fairy#f98ee9"

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

  export function toCapitalize(string){
    let firstLetter = string[0]
    return firstLetter.toUpperCase() + string.slice(1)
  }