// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/

function makeComputer(type, color, weight) {
  // TODO: Your code here
  return {
    type, color , weight
    }
}

var a = makeComputer('gamer', 'white', '1 kg');
var b = makeComputer('gamer', 'pink', '2 kg');

// here we did our factory function which will return an object that has the multiple proprities mentioned as parameter in our function 
//then we assigned our factory function to 2 new variables a and b  

// Write a function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  // TODO: Your code here
  return computer.type + ' ' + computer.color + computer.weight ;
}

// here we are displaying the values of the object computer we have created 

displayComputer(a);
//now we ll test our functions 

var computers = [];
computers.push(a);
computers.push(b);
computers;
// we created an empty array and pushed to it our 2 objects which we have created


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

function uppercaseAll(arrayOfStrings) {
  // TODO: your code here
  return map(arrayOfStrings, function(element){
  	return element.toUpperCase();
  });
  // we are taking the array of string and applying the uppercase on each element of our string 
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

function highestPopulation(arrayOfObjects) {
  // TODO: your code here
  return filter(arrayOfObjects, function(element){
  	return (element.population>500000000)
  	//return element;
  });
  
}
// we iterater our array of objects and filterd it according to the value of the population and displayed the new array that suits that condition
//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/

function halveAll(numbers) {
  // your code is here
  return map(numbers, function(element){
  	return element/2 ;
  });
}

// we iterated our array and returned in the map function the half of each element that existed in the array
//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/
function values(obj) {
  // TODO: your code here
  return map(obj, function(value){
  	return value;
  });
}
// we iterated our object and returned in the map its values 
//Good Luck :))
