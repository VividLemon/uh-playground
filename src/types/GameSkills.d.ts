import type { Skill, GameSkillClass } from '.'

interface GameSkills {
  id: number
  world: string
  classes: {
    // eslint-disable-next-line no-unused-vars
    [K in GameSkillClass]: { description: string; skills: Array<Skill> }
  }
}

export default GameSkills
