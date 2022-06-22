import type { MagicComponent } from '.'

interface GameMagic {
  name: string
  description: string
  level: number
  components: Array<MagicComponent>
  castingTime: string
  range: string
  target: string
  duration: string
  other: string
}

export default GameMagic
