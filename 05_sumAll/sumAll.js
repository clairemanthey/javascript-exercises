const sumAll = function(numOne, numTwo) {
  if (isNaN(numOne) || isNaN(numTwo) || typeof numOne == "string" || typeof numTwo == "string") return 'ERROR'
	if(numOne < 0 || numTwo < 0) return 'ERROR'
	return(Math.abs(numOne - numTwo) + 1) * (numOne + numTwo)/2;

};

/*
function isNumber(num){
	if(isNaN(num))
		{return "Not a number"}
	else{
		return "is number"
	}
}

function isString(num){
	if(typeof num == "string"){
		return "is string"
	}else 
}

/*
console.log(sumAll(1,4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, 90));
console.log(sumAll("10", 3));

console.log(isNumber(3));
console.log(isNumber("2"));
console.log(isNumber("ee"));
*/

// Do not edit below this line
module.exports = sumAll;
