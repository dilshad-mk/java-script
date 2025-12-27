let arr =[233,333,2,332,33343431]
let max = arr.reduce((acc ,crr)=>{
  if (crr>acc){
acc =crr; 

  }
  return acc;
},arr[0])
console.log(max)