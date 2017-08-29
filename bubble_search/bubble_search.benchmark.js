const bubble_search = require('./bubble_search');
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
var rand50 = randomArray(50);
var rand1mil = randomArray(1000000);

suite.add('Bubble search with 50 elements', function() { 
  return bubble_search(rand50);
})
.add('Bubble search with 1.000.000 elements', function() { 
  return bubble_search(rand1mil);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({'async': true});
