let students=[{name: 'john', mark: 75},
         {name: 'jithu', amarkge: 62},   
         {name: 'husn', mark: 55} ,  
         {name: 'sagar', mark: 73} ,  
         {name: 'joshi', mark: 22}   
];
let sixteen = students.filter((val)=>{
    if (val.mark>60){
   return val
    }
})
console.log("mark greater than  60 students are" ,sixteen)