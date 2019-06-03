const checkSpam = function(source, example) {
    if (typeof source != 'string' && typeof example != 'string' ) {
        throw new Error('parameter isn\'t string')
    } else{
        let lowercaseOne = source.toLowerCase();
        let lowercaseTwo = example.toLowerCase();
        let result = lowercaseOne.indexOf(lowercaseTwo);
        if(result == 1){
            return true;
        }else{
            return false;
        }
    } 
}

console.log(checkSpam('asdadasd', 'asdasd'))


















