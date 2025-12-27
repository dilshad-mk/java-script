let arr=[12,45,3,23,44,1,10];
let odd=[];
let even=[];
for (let ele of arr){
    if (ele%2==0){
        even.push(ele)
    }
    else{
        odd.push(ele)
    }
}
console.log("Odd numbers:",odd);
console.log("Even numbers:",even);
console.log("count of odd numbers:",even.length);
console.log("count of even numbers:",odd.length);
