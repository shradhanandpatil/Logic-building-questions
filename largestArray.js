// Find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1]

let arr=[12, 35, 1, 10, 34, 1];

let len=0

for (const i of arr) {
    len++;
}

let first=0,second=0; 
for(let i=0;i<len;i++){
    if(arr[i]>first){
        second=first;
        first=arr[i];
    }else if(arr[i]>second && arr[i]!=first){
        second=arr[i];
    }
}
console.log(`Second largest number is : ${second}`);