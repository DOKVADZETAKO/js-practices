const truncate = function(string, maxlength){
    if (typeof string == 'string' && typeof maxlength == 'number'){
        let a = string.length
        if (a > maxlength){
            let n = a - maxlength
            let another = string.substring(0,n) + "..."
            return another
        }
    }else{
        throw new Error("parameter isn'\t string")
    }
 
 }
 

console.log(truncate("I wanna to say next thing about this topic", 22))




















