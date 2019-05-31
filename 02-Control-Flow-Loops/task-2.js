let message;
let login;
const message = (login == 'Pitter') ? 'Hi' : (login == 'Owner') ? 'Hello' : (login == '') ? 'unknown' : '';
console.log(message);