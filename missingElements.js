let a=[1,2,3,4];
let count=5;
let missing=[];

for(let i=1; i<=count; i++){
    if(a.indexOf(i)==-1){
        missing.push(i);
    }
}

console.log(missing);


