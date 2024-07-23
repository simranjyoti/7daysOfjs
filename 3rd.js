// CONTROL STRUCTURE

//check a number is positive or negative
let b= 9;
if (b>0){
    console.log("number is positive");
}else{
    console.log("number is negative");
}


//prson is eligible to vote (age>=18)
age=19;
if(age>=18){
    console.log("you are eligible to driver");
}else{
    console.log("plz use cycle");
}

//largest of three number
let n1=2;
let n2=6;
let n3=3;
if(n1>n2 && n1>n3){
    console.log(`${n1} is larger`);
}else if(n2>n3 && n2>n1){
    console.log(`${n2} is larger`);
}else{
    console.log(`${n3} is larger`);
}

//print day of week using switch 

let days=3;
switch(days){
case 1: console.log("monday"); break;
case 2: console.log("tuesday"); break;
case 3: console.log("wednesday"); break;
case 4: console.log("thursday"); break;
case 5: console.log("friday"); break;
case 6: console.log("saturday"); break;
case 7: console.log("sunday"); break;
}


//assign grade (a,b,c,d,e) using score
let score=76;
switch(true){
    case (score>=90):console.log("you are getting A grade"); break;
    case (score>=80 && score<90):console.log("you are getting B grade"); break;
    case (score>=70 && score<80):console.log("you are getting C grade"); break;
    case (score>=60 && score<70):console.log("you are getting D grade"); break;

}

//using ternary check number is even or odd
let a=7;
console.log(a%2==0 ? "number is even":"number is odd");

// check year is leap or not
// (divisible by 4 , but not 100 unless also divisible by 400)

let year=2024;
if((year%4==0 && year%100!==0)||year%400===0){
    console.log(`${year} is leap year`);
}else{
    console.log(`${year} is  not leap year`);

}