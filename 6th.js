//ARRAY
// number from 1 to 5
let ar=[1,2,3,4,5]
console.log(ar);


//access the first and last number
 ar=[1,2,3,4,5]
console.log(ar);
console.log(ar[0],ar[4]);


// push , pop , shift , unshift
ar.push(6);
console.log(ar);

ar.pop();
console.log(ar);

ar.shift();
console.log(ar);

ar.unshift(0,1,2,3);
console.log(ar);



//map
ar.map((val)=>(console.log(val)))


//filter
ar.filter((num)=>{
    if(num%2==0){
        console.log(num);
    }
})


//for loop
for(let i=0; i<ar.length; i++){
    console.log(ar[i]);
}


//for each
ar.forEach((value)=>(console.log(value)))

//two dimensional array
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
console.log(...arr1, ...arr2);


//Access the specific element
let arr3=[[1,2,3,4,5],
         [6,7,8],
         [9,10]];
console.log(arr3.flat(Infinity));
console.log(arr3[2][1]);
console.log(arr3[1][1]);
