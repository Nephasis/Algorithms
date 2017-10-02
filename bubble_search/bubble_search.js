function bubble_search(list) {
  var sortedList = [...list];
	var changeInStepHappened = true;
	while (changeInStepHappened) {
		changeInStepHappened = false;
		for (var i = 0; i < sortedList.length-1; i++) {
			if (sortedList[i] > sortedList[i+1]) {
				var temp = sortedList[i];
				sortedList[i] = sortedList[i+1];
				sortedList[i+1] = temp;
				changeInStepHappened = true;
			}
		}
	}
	return sortedList;
}

module.exports = bubble_search
