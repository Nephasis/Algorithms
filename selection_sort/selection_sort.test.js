const selection_sort = require('./selection_sort');

var unsorted = [2, 6, 1, 7, 4, 9];
var sorted = [1, 2, 4, 6, 7, 9];
var sortUnsortedJson = JSON.stringify(selection_sort(unsorted));
var sortedJson = JSON.stringify(sorted);

test('Given an unordered list, order items in increasing order', () => {
    expect(sortUnsortedJson).toBe(sortedJson);
})

// test('', () => {
//     var unsortedJson = JSON.stringify(unsorted);
//       selection_sort(unsorted);
//     expect(unsortedJson).toEqual(JSON.stringify(unsorted));
// })
