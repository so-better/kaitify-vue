import enUs from './en-us'

export type LocaleType = 'zh-cn' | 'en-us'

const localeMap = {
  'en-us': enUs as typeof enUs & { [key: string]: string }
}

export const translate = (locale: LocaleType, key: string) => {
  if (locale == 'zh-cn') {
    return key
  }
  return localeMap[locale][key] ?? key
}
