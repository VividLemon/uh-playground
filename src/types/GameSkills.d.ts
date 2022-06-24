import type { GameSkillClass, GameSkill } from '.'

interface GameSkills {
  id: number
  world: string
  classes: {
    // eslint-disable-next-line no-unused-vars
    [K in GameSkillClass]: { description: string; skills: Array<GameSkill> }
  }
}

export default GameSkills
