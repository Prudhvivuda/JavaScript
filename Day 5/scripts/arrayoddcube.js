num = Number(prompt("Enter a positive number!!"))
a=[];
for(let i=0;i<num;i++){
    a[i]=i+1;
}
let odd = a.filter(el=>el%2!=0);
console.log('Odd numbers are:');
console.log(odd);
let cubes=odd.map(el=>el**3);
console.log('Cube of Odd numbers are:');
console.log(cubes);