const extractCurrencyValue = function (source) {
    if (typeof source == 'string'){
            let first = source.substring(1)
         let another = first++
        return another
    }else{
        throw new Error("parameter isn't string")
    }
 }
 
 console.log(extractCurrencyValue("$120"))


















