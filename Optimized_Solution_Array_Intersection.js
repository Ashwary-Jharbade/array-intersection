const findIntersection = (sm,lg) => {
	let arr = [];
	let obj = {};

	sm.forEach( element => {
		obj[element] = true;
	});

	lg.forEach( element => {
		if( obj[element] == true ) {
			arr.push(element);
			obj[element] = false;
		}
	});
	return arr;
}

const arr1 = [1,3,5,6,7,9,33,66,22,65,88];
const arr2 = [2,5,7,1,6,9,77,65,88,94,22,54];
var result; 

if (arr1.length < arr2.length) {
	result = findIntersection(arr1,arr2);
} else {
	result = findIntersection(arr2,arr1);
}

console.log(result);