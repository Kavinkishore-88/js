//inheritance
class food {
    constructor(foodsize){
        this.size = foodsize;
        this.state = "original";
    }
    setState(foodstate){
        this.state = foodstate;
    }
}

class newfood extends food{//extends is the key word for inherit the class
    constructor(foodsize){
        //super is the key word for denote the parent class
        //it need parameter as any one parent class property
        super(foodsize);
        this.type = "dosa";
    }
    call(){
        console.log(`order is ${this.type} and size is ${this.size} ${this.state}`)
    }
}

const nObj = new newfood("medium");
nObj.call();
nObj.setState("hot");
nObj.call();