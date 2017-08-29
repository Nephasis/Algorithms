function selection_sort(list) {
  for (var i = 0, l = list.length; i < l; i++) {
    var index = 0,
        smallest = list[i];
    for (var j = i + 1; j < l; j++) {
      if (list[j] < smallest) {
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        break;
      }
    }
  }
  return list
}

module.exports = selection_sort;
