//map and reduce toy problem.js
//given an array of peoples names return a single string consisting of the last letter of the alphabet in the names
//var exampleString = ['kani', 'muni', 'aki', 'hana', 'ichizuka']; //in this example the return string would be "nuknz"
//use map and reduce or if your feeling lucky just reduce.


//------------ Solution 1 using both map and recduce --------------------
var exampleArray = ['kani', 'muni', 'aki', 'hana', 'ichizuka'];

var test = function(array) {
	return array.map(function(value, key) {
		return value.split('').sort().pop();
	})
	.reduce(function(accumulator, item) {
		accumulator += item;
		return accumulator;
	}, "");
};

// console.log( test(exampleArray));
//------------ Solution 1 using both map and recduce --------------------


//------------ Solution 2 using just recduce ----------------------------
var exampleArray = ['kani', 'muni', 'aki', 'hana', 'ichizuka'];

var test = function(array) {
	return array.reduce(function(accumulator, item) {
		accumulator += item.split("").sort().pop();
		return accumulator;
	}, "" );
};

// console.log( test(exampleArray));
//------------ Solution 2 using just recduce ----------------------------


//------------ Solution 3 using recursion --------------------

var messArray = function(array, i, resultString) {
	i = i||0;
	resultString = resultString || "";

	if(i === array.length) {
    return resultString;
	}
  
  resultString += array[i].split("").sort().pop();

  return messArray(array, i+1, resultString);

};
//------------ Solution 3 using recursion --------------------
