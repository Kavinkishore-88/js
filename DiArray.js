//Dimentional Array. we do it infinite times

//one dimention
const Name1 = ["kavin","kishore"];
const Name2 = ["D","P"];
const DM1 = [4,30];
const DM2 = [9,9];
const Y1 = [2,5];
const Y2 = [2,3];
console.log(Name1[0],DM1[0],Y1[0]);
console.log(Name1[1],DM1[1],Y1[1]);
console.log(Name2[0],DM2[0],Y2[0]);
console.log(Name2[1],DM2[1],Y2[1]);

//Two dimention
const Name = [Name1,Name2];
const DM = [DM1,DM2];
const Y = [Y1,Y2];
console.log(Name[0][0],Name[0][1],Name[1][0],Name[1][1]);
console.log(DM[0][0],DM[0][1],DM[1][0],DM[1][1]);
console.log(Y[0][0],Y[0][1],Y[1][0],Y[1][1]);

//Tree dimention
const L =[Name,DM,Y];
console.log(L[0][0][0],L[0][0][1],L[0][1][0],L[0][1][1]);
console.log(L[1][0][0],L[1][0][1],L[1][1][0],L[1][1][1]);
console.log(L[2][0][0],L[2][0][1],L[2][1][0],L[2][1][1]);