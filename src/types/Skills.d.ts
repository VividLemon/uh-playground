import { Skill } from '.'
type Class =
  | 'build'
  | 'art'
  | 'buy'
  | 'camp'
  | 'fight'
  | 'heal'
  | 'learn'
  | 'life'
  | 'magic'
  | 'move'
  | 'people'
  | 'powers'
  | 'science'
  | 'sneak'
  | 'sports'
  | 'talk'
  | 'expertise'
  | 'trick'

export interface Skills {
  id: number
  world: string
  // eslint-disable-next-line no-unused-vars
  classes: { [K in Class]: { description: string; skills: Array<Skill> } }
}
