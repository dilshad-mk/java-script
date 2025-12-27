let arr = [3, 5, 3, 2, 5, 5, 1];
let count = {};

for (let ele of arr) {
    if (count[ele]) {
        count[ele] = count[ele]+ 1; 
    } else {
        count[ele] = 1; 
    }
}

console.log(count);
