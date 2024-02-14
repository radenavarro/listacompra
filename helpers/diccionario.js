import { numberToText } from './helpers'

export const operatorList = Object.freeze({
  sum: 'sum',
  substract: 'sub',
  multiply: 'multi',
  divide: 'div'
})

export const locales = Object.freeze({
  es: 'es',
  en: 'en'
})

export const numbers2words = Object.freeze({
  locales: {
    es: 'ES_ES',
    en: 'EN_US'
  }
})

const unoAlVeinte = { 1: 'un', 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco', 6: 'seis', 7: 'siete', 8: 'ocho', 9: 'nueve', 10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince', 16: 'dieciseis', 17: 'diecisiete', 18: 'dieciocho', 19: 'diecinueve', 20: 'veinte' }
const numerosDel = (ini, fin, locale) => {
  const arr = {}
  const length = ini.toString().length
  let lastdigit = parseInt(ini.toString().substr(length - 1, 1))
  const union = getUnion(ini, locale)
  let numTexto = numberToText(ini, locale)
  if (lastdigit !== 0) {
    numTexto = numTexto?.replace(numberToText((lastdigit), locale), '')?.replace('undefined', '')
  }
  for (let i = ini; i <= fin; i++) {
    arr[i] = `${numTexto}${lastdigit !== 0 ? union : ''}${lastdigit !== 0 ? unoAlVeinte[lastdigit] : ''}`
    lastdigit++
  }
  return arr
}

const getUnion = (ini, locale = numbers2words.locales.es) => {
  const val = ''
  if (locale === numbers2words.locales.es) {
    if (ini > 29 && ini < 100) return ' y '
    if (ini >= 100 && ini < 120) return ' '
  }

  return val
}

export const numbers = {
  locales: {
    es: {
      ...unoAlVeinte,
      ...numerosDel(21, 29, numbers2words.locales.es),
      ...numerosDel(30, 39, numbers2words.locales.es),
      ...numerosDel(40, 49, numbers2words.locales.es),
      ...numerosDel(50, 59, numbers2words.locales.es),
      ...numerosDel(60, 69, numbers2words.locales.es),
      ...numerosDel(70, 79, numbers2words.locales.es),
      ...numerosDel(80, 89, numbers2words.locales.es),
      ...numerosDel(90, 99, numbers2words.locales.es)
    }
  }
}
