f();

function f(a){
   if ( typeof a == 'number'){
       console.log('this is number');
       
   }else{
    throw new Error('parameter type is not a Number');
   }
   
}