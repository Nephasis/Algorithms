function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function createArray(len) {
  return new Array(len)
}

function randomizeArray(i, array, min, max) {
  var randArray = [...array];
  if (i === randArray.length) {
    return randArray
  } 
  randArray[i] = randomNumber(min, max);
  return randomizeArray(i+1, randArray, min, max);
}

function randomizeArrayReduce(array, min, max) {
  return [...array].reduce(function(newArray=[randomNumber(min, max)], current) {
    return[...newArray, randomNumber(min, max)];
  })
}

exports.createArray = createArray;
exports.randomizeArray = randomizeArray;
exports.randomizeArrayReduce = randomizeArrayReduce;
module.exports
