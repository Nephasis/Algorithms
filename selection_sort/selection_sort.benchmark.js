const selection_sort = require('./selection_sort');
var Benchmark = require('../benchmark.js/benchmark');
var suite = new Benchmark.Suite;

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
  return randArray
}

var rand50 = randomArray(50);
var rand100k = randomArray(100000);


suite.add('Selection sort with 50 elements', function() { 
  return selection_sort(rand50);
})
.add('Selection sort with 1000000 elements', function() { 
  return selection_sort(rand100k);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({'async': true});

