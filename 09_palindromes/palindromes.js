const palindromes = function (str) {
	let re = /[^A-Za-z0-9]/g;
	str = str.toLowerCase().replace(re, "");
	let strLength = str.length;
	for(let i =  0; i < strLength / 2; i++){
		if(str[i] !== str[strLength - 1 -i]){
			return false
		}
	}
	return true;


};

// Do not edit below this line
module.exports = palindromes;
