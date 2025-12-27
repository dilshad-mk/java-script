let arr =[123,3123,442,3]
let secondl=0;
let firstl=0;
for(let ele of arr){
    if(ele>firstl){
        secondl=firstl;
        firstl=ele;
    }
    else if (ele<firstl && ele>secondl){
        secondl=ele
    }
}
console.log("2nd larget number is :",secondl);