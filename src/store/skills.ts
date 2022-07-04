import type { GameSkills } from '@/types'
import { defineStore } from 'pinia'
import { fs } from '@tauri-apps/api'
import { getAssetPath } from '@/util'
import sanitizeHtml from 'sanitize-html'

interface State {
  skills: Array<GameSkills>
}

export const useSkillStore = defineStore('skills', {
  state: (): State => ({
    skills: [],
  }),
  getters: {
    getSkills: (state): Array<GameSkills> => state.skills,
  },
  actions: {
    async getSkillsFilePath(): Promise<string> {
      return await getAssetPath('skills.json')
    },
    async fetchSkillsFs(): Promise<void> {
      const filePath = await this.getSkillsFilePath()
      this.skills = JSON.parse(await fs.readTextFile(filePath), (_, value) =>
        typeof value === 'string'
          ? sanitizeHtml(value.replaceAll('...', '<br>'), {
              allowedTags: ['br'],
              allowedAttributes: {},
            })
          : value
      )
    },
    async saveSkillsFs(): Promise<void> {
      const filePath = await this.getSkillsFilePath()
      await fs.writeFile({
        contents: JSON.stringify(this.skills),
        path: filePath,
      })
      // notification.sendNotification({
      //   title: "t('errors.error')",
      //   body: "t('errors.skill.saveSkillBody')",
      // })
    },
  },
})
