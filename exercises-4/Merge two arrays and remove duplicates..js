let arr=[32,33,45,53]
let arr2=[32,45,324,552,1];
let mergedarr=arr.concat(arr2);
let newarr=[];
for (let ele of mergedarr){
    if (!newarr.includes(ele)){
        newarr.push(ele)
    }
}
console.log(newarr)