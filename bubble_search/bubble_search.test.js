const bubble_search = require('./bubble_search');

var unsorted = [2, 6, 1, 7, 4, 9];
var sorted = [1, 2, 4, 6, 7, 9];

test('Given an unordered list, order items in increasing order', () => {
    expect(JSON.stringify(bubble_search(unsorted))).toBe(JSON.stringify(sorted));
})
