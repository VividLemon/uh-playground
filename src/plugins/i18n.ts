import { I18nOptions, createI18n } from 'vue-i18n'
import enUS from '@/lang/en-US'

const options: I18nOptions = {
  locale: 'en-US',
  fallbackLocale: 'en-US',
  availableLocales: ['en-US'],
  messages: { 'en-US': enUS },
  legacy: false
}

const i18n = createI18n(options)

export default i18n
