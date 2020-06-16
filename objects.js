var Person = function(living, age, gender) {
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function() {
		return this.gender;
	};
};

var robin = new Person(true, 32, 'male');
var mehmet = new Person (true, 32, 'male')
console.log(robin.getGender());
console.log(mehmet)