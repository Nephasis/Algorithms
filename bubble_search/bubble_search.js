// var bubble_search = function(list) {
//   var swap;
//   do {
//     swap = false;

//     console.log('Hello there');
//     for (var i = 0, n = list.lenght; i < n-1; i++) {
//       console.log('entered the loop');
//       if (list[i] > list[i+1]) {
//         var temp = list[i];
//         list[i] = list[i+1];
//         list[i+1] = temp;
//         swap = true;
//       }
//     }
//   } while (swap === true)
// }

// s = [4,9,7,1,3,6,5]

// // console.log(bubble_search(s))

// bubble_search(s)

var bubble_search = function(list) {
    for (var i = 0, n = list.lenght; i < n-1; i++) {
      console.log('entered the loop');
      if (list[i] > list[i+1]) {
        var temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
}