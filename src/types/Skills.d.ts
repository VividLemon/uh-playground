import { Skill } from '.'
type Class = 'build' | 'art' | 'buy' | 'camp' | 'fight'

export interface Skills {
  id: number
  world: string
  // eslint-disable-next-line no-unused-vars
  skills: { [K in Class]?: Array<Skill> }
}
