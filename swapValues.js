// Swap Values without using any variable a=10, b=12

var a=10, b=12;

console.log(`a = ${a} , b = ${b}`);

a=a+b; // 10 + 12 = 22 --> a=22
b=a-b; // 22 - 12 = 10 --> b=10
a=a-b; // 22 - 10 = 12 --> a=12

console.log(`a = ${a} , b = ${b}`);
