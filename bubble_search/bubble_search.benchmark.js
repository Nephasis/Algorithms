const bubble_search = require('./bubble_search');
const random = require('./random_array');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var listOfFiftyIntegers = random.createRandomList(50, random.randomNumberFromMinToMax(0, 50));
var listOfThousandIntegers = random.createRandomList(1000, random.randomNumberFromMinToMax(0, 1000));

var listOfFiftyLetters = random.createRandomList(50, random.randomLetter);
var listOfThousandLetters = random.createRandomList(1000, random.randomLetter);

var sortedlistOfThousandIntegers = [...listOfThousandIntegers].sort(function(a, b){return a-b});
var sortedlistOfThousandLetters = [...listOfThousandLetters].sort(function(a, b){return a-b});


suite.add('Creation of random array of 1000 random numbers using recursion', function() {
  return random.createRandomList(1000, random.randomNumberFromMinToMax(0, 1000));
})
.add('Creation of random array of 1000 random letters using recursion', function() {
  return random.createRandomList(1000, random.randomLetter);
})
.add('Selection sort with 50 random numbers in unsorted list', function() { 
  return bubble_search(listOfFiftyIntegers);
})
.add('Selection sort with 50 random letters in unsorted list', function() { 
  return bubble_search(listOfFiftyLetters);
})
.add('Selection sort with 1000 random numbers in unsorted list', function() { 
  return bubble_search(listOfThousandIntegers);
})
.add('Selection sort with 1000 random letters in unsorted list', function() { 
  return bubble_search(listOfThousandLetters);
})
.add('Selection sort with 1000 random numbers in sorted list', function() {
  return bubble_search(sortedlistOfThousandIntegers);
})
.add('Selection sort with 1000 random letters in sorted list', function() { 
  return bubble_search(sortedlistOfThousandLetters);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({'async': true});
