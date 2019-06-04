const person = {
    salary: null,
    rate: null,
}
Object.defineProperties(person, {
    rate: {
        value: 0,
        writable: true,
        configurable: false,
        enumerable: false,
    },

    salary: {
        get(){
            const date = new Date();
            const day = date.getDate();
            return day * this.rate;
        },
        set(){
            throw new Error('can\'t use') 
        }
    }
   

});

person.rate = 30
console.log(person.salary);