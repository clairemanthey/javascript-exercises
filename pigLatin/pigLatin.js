//const firstVowelRegex = /^[aeiou]/i; // ^ - beginning of string 
//const globalVowelRemove = /[aeiou]/ig; // i,g case insensitive and global  


function pigLatin(str) {
let res = '';

let regex = /[aeiou]/;

if (!regex.test(str)) {
  res = str + 'ay';
} else if (regex.test(str[0])) {
  res = str + 'way';
} else {
  let x  = str.indexOf(regex.exec(str)[0]);
  res = str.substr(x) + str.substr(0, x) + 'ay'
}
console.log(res);
return res;


}


pigLatin('apple');  
pigLatin("banana");
pigLatin("cherry");
pigLatin("three");
pigLatin("school");
pigLatin("quiet");
console.log("incorrect ones");
pigLatin("eat pie");
pigLatin("square");
pigLatin("the quick brown fox");


// Do not edit below this line
//module.exports = pigLatin;
