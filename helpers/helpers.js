const operatorList = {
  sum: 'sum',
  substract: 'sub',
  multiply: 'multi',
  divide: 'div'
}

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
    console.log(idx)
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
  if (operator === operatorList.sum) result = firstVal += secondVal
  if (operator === operatorList.substract) result = firstVal -= secondVal
  if (operator === operatorList.multiply) result = firstVal *= secondVal
  if (operator === operatorList.divide) result = firstVal /= secondVal
  return result
}
