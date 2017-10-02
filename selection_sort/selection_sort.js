function selection_sort(list) {
  var sortedList = [...list];
  for (var i = 0, l = sortedList.length; i < l; i++) {
    var smallest = sortedList[i];
    var index = 0;
    for (var j = i; j < l; j++) {
      if (sortedList[j] < smallest) {
        smallest = sortedList[j];
        index = j;
    var temp = sortedList[i];
    sortedList[i] = sortedList[index];
    sortedList[index] = temp;
      }
    }
  }
  return sortedList
}

module.exports = selection_sort;
