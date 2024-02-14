import { operatorList } from './diccionario'
const T2W = require('numbers2words')

export const debounce = (fn, delay = 0) => {
  let id
  return (...args) => {
    if (id) {
      clearTimeout(id)
    }
    id = setTimeout(fn, delay, ...args)
    return id
  }
}

export const throttle = (fn, timeDelay = 1000) => {
  let fnTimer
  return (...args) => {
    if (!fnTimer) {
      console.log('throttle')
      fn(...args)
      fnTimer = setTimeout(() => {
        fnTimer = null
      }, timeDelay)
    }
  }
}

export const deepClone = (objeto) => {
  return JSON.parse(JSON.stringify(objeto))
}

export const numberToText = (num, locale) => {
  try {
    const translatorLocale = new T2W(locale)
    console.log(Object.values(translatorLocale))
    return translatorLocale.toWords(num)
  } catch (e) {
    console.error(e)
  }
}

// P L U R A L I Z E

export const handlePlural = (word, qty, locale = 'es-ES') => {
  const plural = 's'
  const pl = new Intl.PluralRules(locale)
  if (pl.select(qty) === 'one') return (word)
  if (pl.select(qty) === 'other') return (word + plural)
  return word
}

// S T O C K

export const sumStock = (originalProducts, newProducts, property, sumKeys) => {
  return operateStock(originalProducts, newProducts, property, sumKeys, operatorList.sum)
}

export const substractStock = (originalProducts, newProducts, property, subKeys) => {
  return operateStock(originalProducts, newProducts, property, subKeys, operatorList.substract)
}

const operateStock = (originalProducts, newProducts, property, sumKeys, operator) => {
  const updatedStock = [...originalProducts]
  for (const product of newProducts) {
    const idx = updatedStock.findIndex((p) => p.uuid === product.uuid)
    if (idx !== -1) {
      updatedStock[idx].cantidad = operate(updatedStock[idx].cantidad, product.cantidad, operator)
    } else {
      updatedStock.push(product)
    }
  }
  return updatedStock.filter((prod) => prod.cantidad > 0)
}

export const operate = (firstVal, secondVal, operator) => {
  let result
  if (operator === operatorList.sum) result = (parseInt(firstVal) + parseInt(secondVal)).toString()
  if (operator === operatorList.substract) result = (firstVal - secondVal)
  if (operator === operatorList.multiply) result = (firstVal * secondVal)
  if (operator === operatorList.divide) result = (firstVal / secondVal)
  return result
}
