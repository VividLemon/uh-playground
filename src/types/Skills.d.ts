import { Skill } from '.'
type Class = 'build' | 'art'

export interface Skills {
  id: number
  world: string
  skills: Record<Class, Array<Skill>>
}
