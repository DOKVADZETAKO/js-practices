function f(){
    let asd = 0;
    for(each of arguments){  
        if(typeof each == 'number'){
            asd = asd + each;  
        }else{
            throw new Error('all parameters type should be a Number'); 
        }
    }
    return asd
}

console.log(f(1,2,3));



