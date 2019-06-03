let person = {
    salary: null,
    rate: null,
}
Object.defineProperty(person, 'salaryRate', {
    get salary() {
        
    },
    set(value) {
        var splitted = value.split(' ');
        this.salary = splitted[0];
        this.rate = splitted[1];
    },
});

person.rate = 30
person.salaryRate = '30';

console.log(person.salaryRate);
console.log(person.salary);
console.log(person.rate);
