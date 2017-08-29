function bubble_search(list) {
	var changeInStepHappened = true;
	while (changeInStepHappened) {
		changeInStepHappened = false;
		for (var i = 0; i < list.length-1; i++) {
			if (list[i] > list[i+1]) {
				var temp = list[i];
				list[i] = list[i+1];
				list[i+1] = temp;
				changeInStepHappened = true;
			}
		}
	}
	return list;
}

module.exports = bubble_search
