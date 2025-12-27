let str ="welcome to js";
let largest='';
let words=str.split(" ")
for(let ele of words){
    if (ele.length>largest.length){
        largest=ele
    }
}
console.log(largest)