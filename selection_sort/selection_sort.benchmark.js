const selection_sort = require('./selection_sort');
var Benchmark = require('../benchmark.js/benchmark');
var suite = new Benchmark.Suite;

function randomArray() {
  var randArray = Array.from(Array(5).keys()).shift();

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

// var rand50 = randomArray(50);
// var rand1mil = randomArray(1000000);


// suite.add('Selection sort with 50 elements', function() { 
//   return selection_sort(rand50);
// })
// .add('Selection sort with 1000000 elements', function() { 
//   return selection_sort(rand1mil);
// })
// .on('cycle', function(event) {
//   console.log(String(event.target));
// })
// .on('complete', function() {
//   console.log('Fastest is ' + this.filter('fastest').map('name'));
// })
// .run({'async': true});

// console.log(randomArray())
