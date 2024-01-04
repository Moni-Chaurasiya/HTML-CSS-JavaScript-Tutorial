class User{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.lenght<4){
            console.log("Name is too short..")
            return;
        }
        this._name= value;
    }
}


let user =new User("John");
console.log(user.name);
user=new User("");