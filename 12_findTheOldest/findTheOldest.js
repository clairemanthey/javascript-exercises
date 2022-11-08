const findTheOldest = function(people) {
	const currentYear = new Date().getFullYear();
	return people.reduce((res, person) => {
		let age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
		return age > res.age ? {person, age} : res;
	}, {person:null, age:0}).person;
};


// Do not edit below this line
module.exports = findTheOldest;
