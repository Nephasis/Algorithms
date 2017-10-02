const bubble_search = require('./bubble_search');
var random = require('./random_array');

var listOfIntegers = random.createRandomList(50, random.randomNumberFromMinToMax(0, 50));
var listOfLetters = random.createRandomList(50, random.randomLetter);
var listOfIdenticalElements = new Array(50).fill(1);

var sortedListOfIntegers = [...listOfIntegers].sort(function(a, b){return a-b});
var sortedListOfLetters = [...listOfLetters].sort();

var bubbleSortedListOfIntegersJson = JSON.stringify(bubble_search(listOfIntegers));
var sortedListOfIntegersJson = JSON.stringify(sortedListOfIntegers);
var bubbleSortedSortedListOfIntegersJson = JSON.stringify(bubble_search(sortedListOfIntegers));

var bubbleSortedListOfLettersJson = JSON.stringify(bubble_search(listOfLetters));
var sortedListOfLettersJson = JSON.stringify(sortedListOfLetters);
var bubbleSortedSortedListOfLettersJson = JSON.stringify(bubble_search(sortedListOfLetters));

var listOfIdenticalElementsJson = JSON.stringify(listOfIdenticalElements);
var bubbleSortedListOfIdenticalElementsJson = JSON.stringify(bubble_search(listOfIdenticalElements));

var unsorted = random.createRandomList(50, random.randomNumberFromMinToMax(0, 50));
var unsordedJson = JSON.stringify(unsorted)

test('Given an unordered list of numbers, puts them in increasing order', () => {
  expect(bubbleSortedListOfIntegersJson).toEqual(sortedListOfIntegersJson);
})

test('Given an unordered list of letters, puts them in increasing order', () => {
  expect(bubbleSortedListOfLettersJson).toEqual(sortedListOfLettersJson);
})

test('Given an ordered list of numbers returns the input', () => {
  expect(bubbleSortedSortedListOfIntegersJson).toEqual(sortedListOfIntegersJson);
})

test('Given an ordered list of letters returns the input', () => {
  expect(bubbleSortedSortedListOfLettersJson).toEqual(sortedListOfLettersJson);
})

test('Given a list of identical elements, returns the input', () => {
  expect(bubbleSortedListOfIdenticalElementsJson).toEqual(listOfIdenticalElementsJson);
})

test('Immutability test', () => {
  var unsortedJson = JSON.stringify(unsorted);
    bubble_search(unsorted);
  expect(unsortedJson).toEqual(JSON.stringify(unsorted));
})
