let arr =[1,2,3,4,5,7,8,9,10];
let sum =55;
let arrsum=0;
let missingval= 0;
for(let ele of arr){
    arrsum=arrsum+ele;
}
missingval=sum-arrsum;
console.log("Missing val from :",arr,"is:", missingval)