class Customers {
    constructor() {
        this.Customers = [];

    }
    [Symbol.iterator] = function* () {
        if (customers.hasOwnProperty('verified') && customers.verified == true) {
            return Promise.resolve(true)
        }
        return Promise.reject('Customer is not verified')
    }
    add() {

    }
};


const customers = new Customers();

customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });

for (const customer of customers) {
    console.log(customer);
}

// console log
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }