type BaseResource =
  | 'Dexterity'
  | 'Deduction'
  | 'Memory'
  | 'Imagination'
  | 'Strength'
  | 'Mind/2'
  | 'Body/2'
  | 'Wealth/2'
  | 'Varies'
  | 'Soul/2'
  | 'Faith'
  | 'All 4 Resources/4'
  | 'Employability'
type Limit = 'Universal' | 'Exclusive' | 'Acclimatable'

export interface Skill {
  name: string
  description: string
  limit: Limit
  base: BaseResource
  experts?: Record<string, Array<string>>
  pairs?: Array<{ skill: string; description: string }>
}
