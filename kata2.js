const inputString = 'furkan bayram', returnObject = {}

const countAmountOfEachCharacter = inputString => {
  inputString = inputString.split("")
  inputString.forEach((item) => {
    returnObject.hasOwnProperty(item) ? returnObject[item] += 1 : returnObject[item] = 1;
  })
  return returnObject
}

countAmountOfEachCharacter(inputString)