function bubble_search(list) {
	// keep looping until all passes in the step would be without any change
	var cond = true;
	while (cond) {
		cond = false;
		for (var i = 0; i < list.length-1; i++) {
			if (list[i] > list[i+1]) {
				var temp = list[i];
				list[i] = list[i+1];
				list[i+1] = temp;
				cond = true;
			}
		}
	}
	return list;
}

// var unsorted = [2, 6, 1, 7, 4, 9];
// bubble_search(unsorted);

module.exports = bubble_search