class DB{
    constructor(){
        this.data = new Map()
    }
    create(obj){
        if(!obj || typeof obj == "object"){
            let docid = new Date().getTime().toString()
            this.data.set(docid, obj)
            return docid
        }else{
            throw new Error("not an object!")
        }
    }
 
    read(id){
        if(!id || typeof id == "string"){
            const costum = this.data.get(id);
            return costum ? {...costum, id} : null
        }else{
            throw new Error("not a string!")
        }
    }
 
    readAll(){
        if(arguments.length > 0) throw new Error("No arguments!")
        return Array.from(this.data.values())
    }
 
    update(id, obj){
        if(!id || typeof id != "string") throw new Error("Not a String ID")
        if(!obj || typeof obj != "object") throw new Error("not an object!")
 
        const costum = this.data.get(id)
        if(costum){
            this.data.set(id, {...costum, ...obj})
            return id
        } else {
            throw new Error("No user ID")
        }
    }
 
    delete(id){
        if(!id || typeof id != "string") throw new Error("Not a String ID")
        if(this.data.get(id)){
            return this.data.delete(id)
        }
    }
 
 }
 
 const db = new DB();
 
 const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
 };
 
 const id = db.create(person);
 const customer = db.read(id);
 const customers = db.readAll(); // array of users
 db.update(id, { age: 22 }); // id
 db.delete(id); // true