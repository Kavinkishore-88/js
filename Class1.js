//Classes

class food {
    constructor(foodtype,fooditem,foodsize){
        this.type = foodtype;
        this.item = fooditem;
        this.size = foodsize;
    }
    getLs(){
        return this.size;
    }
    setLs(ls){
        this.size = ls;
    }
    order(){
        return console.log(`order is ${this.type} ${this.item} and size is ${this.size}`);
    }
}

const nfood = new food("masal","dosa","large");
nfood.order();
console.log(nfood.item);

// its denger to mod 
nfood.size = "small";
nfood.order();

// alternative
nfood.setLs("large");
nfood.order();

//new Object
const nobj = new food("chikan","dosa","large")
nobj.order();
