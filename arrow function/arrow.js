const greet = () => {

    console.log('hi world');
}
greet();
const add = (a,b) => {
    sum=a+b;
    console.log(sum);
}
add(10,23);
const square = (b) => {
    sq = b*b;
    console.log(sq);
}
square(5);

const double = (b) => {
    db = b*2;
    console.log(db);
    // return db;
}
double(5);
const addword = (w) => {
    
    console.log('hi',w);
    
}
addword('world');
const positive = (num) => {
    if (num>0){
        console.log('+ve')
    }
    else{
        console.log('-ve');
    }
    
    
}
positive(1);

const fullname = (w1,w2) => {
    
    console.log(w1,w2);
    
}
fullname('mr','perfect');

const hi= (w3)=>{
    console.log(w3);

}
hi('hello');
const cube =(num1)=>{
    cb=num1*num1*num1;
    console.log(cb);
}
cube(3);
const even=(num)=>{
    if(num%2==0){
        console.log(num+'is even');
    }
    else {
        console.log("not even");
    }
}
even(3);
let login=(user,pwd)=>{

    console.log('User:'+" "+user+ " ," +'password :'+pwd);
}
login('admin',"2232fdf");