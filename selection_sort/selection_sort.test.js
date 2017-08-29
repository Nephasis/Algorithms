const selection_sort = require('./selection_sort');

var unsorted = [2, 6, 1, 7, 4, 9];
var sorted = [1, 2, 4, 6, 7, 9];

test('Given an unordered list, order items in increasing order', () => {
    expect(JSON.stringify(selection_sort(unsorted))).toBe(JSON.stringify(sorted));
})
