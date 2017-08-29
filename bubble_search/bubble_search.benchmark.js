const bubble_search = require('./bubble_search');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// function shuffle() {
//   for (var i = randArray.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = randArray[i];
//     randArray[i] = randArray[j];
//     randArray[j] = temp;
// }

function randomArray(len) {
  var randArray = Array.from(Array(len).keys());

  var shuffle = function() {
    for (var i = randArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = randArray[i];
      randArray[i] = randArray[j];
      randArray[j] = temp;
    } 
  }();
  return randArray;
}
var rand50 = randomArray(50);
var rand100k = randomArray(100000);

suite.add('Bubble search with 50 elements', function() { 
  return bubble_search(rand50);
})
.add('Bubble search with 100.000 elements', function() { 
  return bubble_search(rand100k);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({'async': true});

