let arr =[12,22,4,2,3,55,5]
let even=arr.filter((val)=>{
    if (val%2==0){
        return val;
    }
})
console.log(even)