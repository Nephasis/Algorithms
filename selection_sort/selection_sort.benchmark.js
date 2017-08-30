const selection_sort = require('./selection_sort');
const rand = require('./random_array');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var arr50 = rand.createArray(50);
var rand50 = rand.randomizeArray(0, arr50, 0, 50);

var arr1k = rand.createArray(1000);
var rand1k = rand.randomizeArray(0, arr1k, 0, 1000);

var sorted1k = [...rand1k].sort(function(a, b){return a-b});

suite.add('Creation of random array of 1000 elements using recursion', function() {
  return rand.randomizeArray(0, arr1k, 0, 1000);
})
.add('Creation of random array of 1000 elements using reduce()', function() {
  return rand.randomizeArrayReduce(arr1k, 0, 1000);
})
.add('Selection sort with 50 elements in unsorted list', function() { 
  return selection_sort(rand50);
})
.add('Selection sort with 1000 elements in unsorted list', function() { 
  return selection_sort(rand1k);
})
.add('Selection sort with 1000 elements in sorted list', function() {
  return selection_sort(sorted1k);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({'async': true});

