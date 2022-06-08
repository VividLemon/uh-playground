import { Magics } from '@/types'
import { defineStore } from 'pinia'
import { fs, path, notification } from '@tauri-apps/api'
import { useI18n } from 'vue-i18n'

interface State {
  magics: Array<Magics>
}

export const useMagicStore = defineStore('magics', {
  state: (): State => ({
    magics: [],
  }),
  getters: {
    getMagics: (state): Array<Magics> => state.magics,
  },
  actions: {
    async getMagicsFilePath(): Promise<string> {
      return await path.resolve(
        await path.resourceDir(),
        'assets',
        'magics.json'
      )
    },
    async fetchMagicsFs(): Promise<void> {
      const { t } = useI18n()
      try {
        const filePath = await this.getMagicsFilePath()
        this.magics = JSON.parse(await fs.readTextFile(filePath))
      } catch (error) {
        this.magics = []
        notification.sendNotification({
          title: t('errors.error'),
          body: t('errors.magic.fetchMagicBody'),
        })
      }
    },
    async saveMagicsFs(): Promise<void> {
      const { t } = useI18n()
      try {
        const filePath = await this.getMagicsFilePath()
        await fs.writeFile({
          contents: JSON.stringify(this.magics),
          path: filePath,
        })
      } catch (error) {
        notification.sendNotification({
          title: t('errors.error'),
          body: t('errors.magic.saveMagicBody'),
        })
      }
    },
  },
})
