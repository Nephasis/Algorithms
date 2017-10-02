const selection_sort = require('./selection_sort');
var random = require('./random_array');

var listOfIntegers = random.createRandomList(50, random.randomNumberFromMinToMax(0, 50));
var listOfLetters = random.createRandomList(50, random.randomLetter());
var listOfIdenticalElements = new Array(50).fill(1);

var sortedListOfIntegers = [...listOfIntegers].sort(function(a, b){return a-b});
var sortedListOfLetters = [...listOfLetters].sort();

var selectionSortedListOfIntegersJson = JSON.stringify(selection_sort(listOfIntegers));
var sortedListOfIntegersJson = JSON.stringify(sortedListOfIntegers);
var selectionSortedSortedListOfIntegersJson = JSON.stringify(selection_sort(sortedListOfIntegers));

var selectionSortedListOfLettersJson = JSON.stringify(selection_sort(listOfLetters));
var sortedListOfLettersJson = JSON.stringify(sortedListOfLetters);
var selectionSortedSortedListOfLettersJson = JSON.stringify(selection_sort(sortedListOfLetters));

var listOfIdenticalElementsJson = JSON.stringify(listOfIdenticalElements);
var selectionSortedListOfIdenticalElementsJson = JSON.stringify(selection_sort(listOfIdenticalElements));

var unsorted = random.createRandomList(50, random.randomNumberFromMinToMax(0, 50));
var unsordedJson = JSON.stringify(unsorted)

test('Given an unordered list of numbers, puts them in increasing order', () => {
  expect(selectionSortedListOfIntegersJson).toEqual(sortedListOfIntegersJson);
})

test('Given an unordered list of letters, puts them in increasing order', () => {
  expect(selectionSortedListOfLettersJson).toEqual(sortedListOfLettersJson);
})

test('Given an ordered list of numbers returns the input', () => {
  expect(selectionSortedSortedListOfIntegersJson).toEqual(sortedListOfIntegersJson);
})

test('Given an ordered list of letters returns the input', () => {
  expect(selectionSortedSortedListOfLettersJson).toEqual(sortedListOfLettersJson);
})

test('Given a list of identical elements, returns the input', () => {
  expect(selectionSortedListOfIdenticalElementsJson).toEqual(listOfIdenticalElementsJson);
})

test('Immutability test', () => {
  var unsortedJson = JSON.stringify(unsorted);
    selection_sort(unsorted);
  expect(unsortedJson).toEqual(JSON.stringify(unsorted));
})
