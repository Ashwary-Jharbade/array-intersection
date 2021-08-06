// The parameterised function pushes common elements from two array into third array and resturn it
const getCommonElements = (arr1,arr2) => {
	// initialising a empty array for storing common elemets
	const arr = [];

	// initialising i and j iterators with value 0
	var i=0;
	var j=0;

	// sorting parameterised array's
	arr1.sort(function(a, b){return a - b})
	arr2.sort(function(a, b){return a - b})
	let counter = 0

	// looping over both the sorted array's according to their respective length. If the iterators reaches to the length of the respective array it stops the loop
	while ( i<arr1.length && j<arr2.length ) {
		counter = counter+1;
		// checking if the ith and jth elements are equal and pushing them into array named arr
		if (arr1[i] == arr2[j]) {
			arr.push(arr1[i]);

			// incrementing both the itearators by plus 1 
			i = i+1;
			j = j+1;

		//  checking the ith and jth  value of the respective array's to figure out which one has small value
		// if arr1 has small value compare to arr2. The ith value will be inremented
		} else if (arr1[i] < arr2[j]) {
			i = i+1;
		// else part increments the value of iterator j sicne it has small value
		} else {
			j = j+1;
		}
	}

	console.log(counter)

	// returning the array named arr containing the intercepted elements
	return arr;
}

// initilising arr1
var arr1 = [1,3,5,6,7,9,33,]
// initilising arr1
var arr2 = [2,5,7,1,6,9,77,65,88,94,22,54]

// calling the getCommonElements function with the 2 array as parameters and printing the returend array with inytercepted elements.
console.log(getCommonElements(arr1,arr2))
