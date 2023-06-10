let countCh = (ch) => {
    let countChF = function(s) {
        let r=0
        for ( let c=0; c<s.length; c++) {
            if (s[c]==ch) {r++}
        }
        return r
     }
    return countChF;
}
  
    
let countBs = countCh("B");

let {name, age} = {name: "kk", age: 23}
//console.log(nn);
console.log(name);
console.log(age);