import type { GameMagics } from '@/types'
import { defineStore } from 'pinia'
import { fs } from '@tauri-apps/api'
import { getAssetPath } from '@/util'

interface State {
  magics: Array<GameMagics>
}

export const useMagicStore = defineStore('magics', {
  state: (): State => ({
    magics: [],
  }),
  getters: {
    getMagics: (state): Array<GameMagics> => state.magics,
  },
  actions: {
    async getMagicsFilePath(): Promise<string> {
      return await getAssetPath('magics.json')
    },
    async fetchMagicsFs(): Promise<void> {
      const filePath = await this.getMagicsFilePath()
      this.magics = JSON.parse(await fs.readTextFile(filePath))
      // notification.sendNotification({
      //   title: t('errors.error'),
      //   body: t('errors.magic.fetchMagicBody'),
      // })
    },
    async saveMagicsFs(): Promise<void> {
      const filePath = await this.getMagicsFilePath()
      await fs.writeFile({
        contents: JSON.stringify(this.magics),
        path: filePath,
      })
      // notification.sendNotification({
      //   title: t('errors.error'),
      //   body: t('errors.magic.saveMagicBody'),
      // })
    },
  },
})
