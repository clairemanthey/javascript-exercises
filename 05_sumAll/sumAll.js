const sumAll = function(numOne, numTwo) {
  if (isNaN(numOne) || isNaN(numTwo) || typeof numOne == "string" || typeof numTwo == "string") return 'ERROR'
	if(numOne < 0 || numTwo < 0) return 'ERROR'
	return(Math.abs(numOne - numTwo) + 1) * (numOne + numTwo)/2;

};


// Do not edit below this line
module.exports = sumAll;
