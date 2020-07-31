let returnObject = { even: [], odd: [] }, numbers = [1, 2, 3, 4, 5]

const splitOddAndEven = numbers => {
  numbers.filter((item) => {
    item % 2 == 0 ? returnObject.even.push(item) : returnObject.odd.push(item)
  })
  return returnObject
}

splitOddAndEven(numbers)