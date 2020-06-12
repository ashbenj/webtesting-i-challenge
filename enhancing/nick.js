//function takes a single argument called arr
function equalizeArray(arr) {
	//creating a new empty object
	let obj = {};
	//using a for loop (for of loop) same as a for loop but does not need conditionals
	//let i (index) of whatever arr represents
	for (let i of arr) {
		//conditional part, checks to see if obj of index i is true
		if (obj[i]) {
			//next part increments for each iteration through the argument arr
			obj[i]++;
			//if it's false, then it will set it to equal 1
		} else {
			obj[i] = 1;
		}
	}
	//Object with a capital O is the Object Constructor which defines that it is an object; Array would be another example of a constructor
	//setting the valueArr equal to values but setting it as an object using constructor and passing in obj as argument
	const valueArr = Object.values(obj);
	//setting max equal to Math.max method returns the largest value of the given number set
	//spreading in valueArr. I believe we are spreading this in to give us a shallow copy, maintaining immutability
	const max = Math.max(...valueArr);
	//finally returning the original functions argument of arr .length which will iterate through and returns the largest value of the given data set minus the max
	//after the for loop is completed through the arr, it will update the values above and return a single number that is the difference of the arr.length and the maximum it
	return arr.length - max;
}
