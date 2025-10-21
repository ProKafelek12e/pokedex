import BugImg from "./media/types/Bug.webp"
import DarkImg from "./media/types/Dark.webp"
import DragonImg from "./media/types/Dragon.webp"
import ElectricImg from "./media/types/Electric.webp"
import FairyImg from "./media/types/Fairy.webp"
import FightingImg from "./media/types/Fighting.webp"
import FireImg from "./media/types/Fire.webp"
import FlyingImg from "./media/types/Flying.webp"
import GhostImg from "./media/types/Ghost.webp"
import GrassImg from "./media/types/Grass.webp"
import GroundImg from "./media/types/Ground.webp"
import IceImg from "./media/types/Ice.webp"
import NormalImg from "./media/types/Normal.webp"
import PoisonImg from "./media/types/Poison.webp"
import PsychicImg from "./media/types/Psychic.webp"
import RockImg from "./media/types/Rock.webp"
import SteelImg from "./media/types/Steel.webp"
import WaterImg from "./media/types/Water.webp"

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





  export function getImg(type){
    if(type==="bug") return BugImg
    if(type==="dark") return DarkImg
    if(type==="dragon") return DragonImg
    if(type==="electric") return ElectricImg
    if(type==="fairy") return FairyImg
    if(type==="fighting") return FightingImg
    if(type==="fire") return FireImg
    if(type==="flying") return FlyingImg
    if(type==="ghost") return GhostImg
    if(type==="grass") return GrassImg
    if(type==="ground") return GroundImg
    if(type==="ice") return IceImg
    if(type==="normal") return NormalImg
    if(type==="poison") return PoisonImg
    if(type==="psychic") return PsychicImg
    if(type==="rock") return RockImg
    if(type==="steel") return SteelImg
    if(type==="water") return WaterImg
  }