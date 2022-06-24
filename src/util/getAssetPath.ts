import { path } from '@tauri-apps/api'

/**
 * Gets the assets folder location or a specific path after reaching the assets folder
 *
 * @param {Array<string>} paths A sequence of paths after reaching the assets folder
 */
export default async (...paths: Array<string>): Promise<string> =>
  await path.resolve(await path.resourceDir(), 'assets', ...paths)
