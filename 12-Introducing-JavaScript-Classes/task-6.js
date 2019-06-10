class student {
	constructor(name, surname, year) {
		this.name = name;
        this.surname = surname;
        this.year = year;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
    }
    
    getCourse(){
        return 
    }
}

var student = new Student('John', 'Smith', 2015);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2015
console.log(worker.getCourse()); // print 4 - fourth course, because current year 2019