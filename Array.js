//Array
const mArray = [];
//insert element

mArray[0] = "kavin";
mArray[1] = "kishore";
mArray[2] = 99;
mArray[3] = true;

console.log(mArray);
console.log(mArray.length);
console.log(mArray[2]);
console.log(mArray[mArray.length-1]);

mArray.push("love");
console.log(mArray);
mArray.pop();
console.log(mArray);
mArray.unshift("love");
console.log(mArray);
mArray.shift();
console.log(mArray);

const al = mArray.push("lenth");
console.log(al);
const al_ = mArray.unshift("flenth");
console.log(al_);
const ll = mArray.pop();
console.log(ll);
const ll_ = mArray.shift();
console.log(ll_);

console.log(mArray);
delete mArray[2];
console.log(mArray);

mArray.splice(2,1);
console.log(mArray);
mArray.splice(1,1,"Aran");
console.log(mArray);
mArray.splice(1,0,"Deer");
console.log(mArray);

const nAarry = mArray.slice(0,1);//return a copy 
console.log(nAarry);
const nnAarry = mArray.slice(0);
console.log(nnAarry);

const newArray = mArray.join();
console.log(newArray);
const nowArray = newArray.split(",");
console.log(nowArray);

const lArray = ["dd",99,33];
const llArray = mArray.concat(lArray);
console.log(llArray);
const la = [...mArray,...lArray];/// "..."- spred oprater
console.log(la);
