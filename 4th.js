//  LOOPING
//wap t0 print 1 to 10 using for loop

for(let i=1; i<=10; i++){
    console.log(i);
}


//wap multipication of 5 using for loop
 
for(let i=1;i<=10; i++){
  let num=i*5;
    console.log(num);
}

//sum of 1 to 10 using  for and while loop
let sum=0;
for(let i=1;i<=10; i++){
   sum=sum+i;
}
console.log(sum);

 sum=0;
let i=1;
while(i<=10){
sum=sum+i;
i++;
}
console.log(sum);


//print 10 to 1 using while loop

let i=10;
while(i>=1){
console.log(i);
i--;
}
//print 1 to 5 using do while loop

let i=1;
do{
    console.log(i);
    i++;
}while(i<=5)


//calcute the factorial of a number 
let fact=1;
for(let i=6; i>=1; i--){
 fact=fact*i; 
}
console.log(fact);

//print this pattern
// *
// **
// ***
// ****

for(let i=1; i<=4; i++){
    for(let j=1; j<=i; j++){
      console.log("*");

      }
      console.log("</br>");
}
// print 1 to 10 skip 5 using continue
for(let i=1; i<=10; i++){
    if(i==5)
    continue;
   console.log(i);
   }

//print 1 to 10 stop when number is 7 using break statement

for(let i=1; i<=10; i++){
    if(i==7)
        break;
    console.log(i);
}