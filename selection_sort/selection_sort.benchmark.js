const selection_sort = require('./selection_sort');
var Benchmark = require('../benchmark.js/benchmark');
var suite = new Benchmark.Suite;

function randomArray(len) {
  var randArray = Array.from(Array(len).keys()).shift();

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

suite.add('Selection sort with 50 elements', function() { 
  return selection_sort(randomArray(50));
})
.add('Selection sort with 100000 elements', function() { 
  return selection_sort(randomArray(100000));
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({'async': true});
