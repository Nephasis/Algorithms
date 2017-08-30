const selection_sort = require('./selection_sort');
var rand = require('./random_array');

var array = rand.createArray(20);
var unsorted = rand.randomizeArray(0, array, 0, 50);
var sorted = [...unsorted].sort(function(a, b){return a-b});

var sortUnsortedJson = JSON.stringify(selection_sort(unsorted));
var sortedJson = JSON.stringify(sorted);
var sortSortedJson = JSON.stringify(selection_sort(sorted));

test('Given an unordered list, order items in increasing order', () => {
    expect(sortUnsortedJson).toEqual(sortedJson);
})

test('Given an ordered list return the input', () => {
  expect(sortSortedJson).toEqual(sortedJson)
})

// test('', () => {
//     var unsortedJson = JSON.stringify(unsorted);
//       selection_sort(unsorted);
//     expect(unsortedJson).toEqual(JSON.stringify(unsorted));
// })
