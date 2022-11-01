const repeatString = function(string, num) {
	let newString = "";
	while (num > 0){
		num = num - 1;
		newString = newString + string;
	}
	return newString;
};


// Do not edit below this line
module.exports = repeatString;
