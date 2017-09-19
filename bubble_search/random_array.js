function randomNumberFromMinToMax(min, max) {
  return () => {
    return Math.floor(Math.random() * (max - min + 1) + min)   
  }
}

function randomLetter() {
  let shift = 9;
  let number = randomNumberFromMinToMax(1, 25)() + shift;
  return number.toString(36);
}

function createRandomList(length, elementGenerator, list = []) {
  if (length === list.length) {
    return list;
  }
  return createRandomList(length, elementGenerator, [...list, elementGenerator()]);
}

module.exports = {
  createRandomList : createRandomList,
  randomNumberFromMinToMax : randomNumberFromMinToMax,
  randomLetter : randomLetter
}
