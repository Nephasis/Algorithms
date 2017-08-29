const bubble_search = require('./bubble_search');

var unsorted = [2, 6, 1, 7, 4, 9];
var sorted = [1, 2, 4, 6, 7, 9];

var bigSortedArray = Array.from(Array(100000).keys())

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  } 
  return array;
}

var bigUnsortedArray = shuffle(bigSortedArray);

test('Given an unordered list, order items in increasing order', () => {
    expect(JSON.stringify(bubble_search(unsorted))).toBe(JSON.stringify(sorted));
})

test('Given a big unordered list of 100.000 elements, order items in increasing order', () => {
    expect(JSON.stringify(bubble_search(bigUnsortedArray))).toBe(JSON.stringify(bigSortedArray));
})
