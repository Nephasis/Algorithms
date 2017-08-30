function selection_sort(list) {
  var sortedList = [...list];
  for (var i = 0, l = sortedList.length; i < l; i++) {
    var index = 0,
        smallest = sortedList[i];
    for (var j = i + 1; j < l; j++) {
      if (sortedList[j] < smallest) {
        var temp = sortedList[i];
        sortedList[i] = sortedList[j];
        sortedList[j] = temp;
        break;
      }
    }
  }
  return sortedList
}

module.exports = selection_sort;
