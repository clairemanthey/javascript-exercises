const caesar = function(str, num) {
	if(num < 0){
		return caesar(str, num + 26);
	}

	let encodedStr = "";

	for(let i = 0; i < str.length; i++){
		let character = str[i];
		if(character.match(/[a-z]/i)){
			let code = str.charCodeAt(i);
			if(code >= 65 && code <= 90){
				character = String.fromCharCode(((code -65 + num) % 26) + 65);
			}
			else if(code >= 97 && code <= 122){
				character = String.fromCharCode(((code - 97 + num) % 26) +97);
			}
		}
		encodedStr += character;
	}

	return encodedStr;
	
};

//caesar('A', 1);

// Do not edit below this line
module.exports = caesar;
