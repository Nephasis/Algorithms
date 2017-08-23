var selection_sort = function (list) {
  for (var i = 0, l = list.length; i < l; i++) {
    var index = 0,
        smallest = list[i];
    console.log("Taking the most left value " + list[i])
    for (var j = i + 1; j < l; j++) {
      console.log("Comparing the value of the most left value " + smallest + " to other value " + list[j])
      if (list[j] < smallest) {
        console.log("Until I find lower value: " + list[j] + ' is smaller than previous ' + smallest)
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        console.log('Current state of list ' + list)
        break;
      }

    }
  }
  return list
}

unsorted = [2, 6, 1, 7, 4, 9];
n = selection_sort(unsorted)
console.log(n)