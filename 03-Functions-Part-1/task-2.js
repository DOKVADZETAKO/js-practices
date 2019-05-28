f(1,2,3);
f(1,1,1,1,1,1,1,1);
f(1,2,'s',4);


function f(){
    var a = 0;
    for(each of arguments){    
        if(typeof each == 'number'){     
            a = a + each;
        }else{
            throw new Error('all parameters type should be a Number');
           }
    }
    console.log(a);
}