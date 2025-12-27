let arr =[33,5435,66,33,66,1,23,3];
let ogarr= [];
for(let ele of arr){
    if (!ogarr.includes(ele)){
        ogarr.push(ele);
    }
}
console.log(ogarr)