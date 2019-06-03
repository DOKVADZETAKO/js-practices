let person = {
    get salary(){
        let date = new Date();
        let nextMonth = new Date();
        nextMonth.setMonth(date.getMonth(+1));
        nextMonth.setDate(1)
        let today = (nextMonth - date) / 8.64e7;
        if(today < 10){
            return 'good salary'
        }else{
            return 'bad salary'
        }
    }
}

console.log(person.salary)

