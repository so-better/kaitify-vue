import enUS from './en-us'
import jaJP from './ja-jp'
import koKR from './ko-kr'

export type LocaleType = 'zh-CN' | 'en-US' | 'ko-KR' | 'ja-JP'

const localeMap = {
  'en-US': enUS as typeof enUS & { [key: string]: string },
  'ko-KR': koKR as typeof koKR & { [key: string]: string },
  'ja-JP': jaJP as typeof jaJP & { [key: string]: string }
}

export const translate = (locale: LocaleType, key: string) => {
  if (locale == 'zh-CN') {
    return key
  }
  return localeMap[locale][key] ?? key
}
