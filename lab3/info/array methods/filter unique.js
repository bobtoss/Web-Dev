function unique(arr) {
    let unique = [];
    for(let str of arr){
        if(!unique.includes(str)){
            unique.push(str);
        }
    }
    return unique;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) );