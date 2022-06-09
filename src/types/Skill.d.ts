type BaseResource =
  | 'Dexterity'
  | 'Deduction'
  | 'Memory'
  | 'Imagination'
  | 'Strength'
  | 'Mind/2'
  | 'Body/2'
  | 'Wealth/2'
type Limit = 'Universal' | 'Exclusive' | 'Acclimatable'

export interface Skill {
  name: string
  description: string
  limit: Limit
  base: BaseResource
  experts?: Record<string, Array<string>>
  pairs?: Array<{ skill: string; description: string }>
}
