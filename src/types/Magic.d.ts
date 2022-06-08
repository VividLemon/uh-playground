import { MagicComponent } from '.'

export interface Magic {
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
