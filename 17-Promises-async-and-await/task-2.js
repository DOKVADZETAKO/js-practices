function getCustomers(customers, countries){
    nb = 0;
    for(each of customers){
        if(customers[nb].hasOwnProperty('verified') && customers[nb].verified == true && customers[nb].id == countries[nb].id ){
            if(countries[nb].hasOwnProperty('country')){
                return Promise.resolve({...customers[nb],...countries[nb]})
            }else{
               return Promise.reject(`We don't have information about country for this customer: ${customer.name}`)
            }
        } ++nb  
    }
}



const customers = [
    {
        id: 'A4',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))