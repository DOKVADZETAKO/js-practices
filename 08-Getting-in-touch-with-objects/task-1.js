const person = {
    salary: 1000
}

Object.defineProperty(person, 'salary', {
    get(){
    let today = new Date();
      let month = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      if (today.getDate() < (month - 20)) {
          return 'Good salary';
      } else {
          return 'Bad salary';
      }
  },
});


console.log(person.salary)

