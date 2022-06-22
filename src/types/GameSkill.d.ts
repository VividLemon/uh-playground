import type { GameSkillLimit, GameBaseResource } from '.'

interface GameSkill {
  name: string
  abbreviation: string
  description: string
  limit: GameSkillLimit
  base: GameBaseResource
  experts?: Record<string, Array<string>>
  pairs?: Array<{ skill: string; description: string }>
}

export default GameSkill
