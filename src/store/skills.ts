import { GameSkills } from '@/types'
import { defineStore } from 'pinia'
import { fs, path, notification } from '@tauri-apps/api'
import { useI18n } from 'vue-i18n'

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
      return await path.resolve(
        await path.resourceDir(),
        'assets',
        'skills.json'
      )
    },
    async fetchSkillsFs(): Promise<void> {
      const { t } = useI18n()
      try {
        const filePath = await this.getSkillsFilePath()
        this.skills = JSON.parse(await fs.readTextFile(filePath))
        // TODO this should instead just be caught downstream
      } catch (error) {
        this.skills = []
        notification.sendNotification({
          title: t('errors.error'),
          body: t('errors.skill.fetchSkillBody'),
        })
      }
    },
    async saveSkillsFs(): Promise<void> {
      const { t } = useI18n()
      try {
        const filePath = await this.getSkillsFilePath()
        await fs.writeFile({
          contents: JSON.stringify(this.skills),
          path: filePath,
        })
      } catch (error) {
        notification.sendNotification({
          title: t('errors.error'),
          body: t('errors.skill.saveSkillBody'),
        })
      }
    },
  },
})
