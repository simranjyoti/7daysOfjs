// FUNCTION

// number is even or odd
function even(num){
    return (num%2==0 ?"even":"odd")
}
console.log(even(9));


//square of number and result the result
function squr(n) {
    return n*n
}
console.log(squr(7));


//max number of two number
function max(a,b){
    return(a>b? a:b)
}
console.log(max(1,3));


//concatenate two string and return result
function con(){
    return ("komal"+"sharma")
}
let result= con();
console.log(result);


//using arrow function sum of two number
let n=(n1,n2)=>(n1+n2)
console.log(n(3,5));



// check if a string contains a specific character and return a boolean value
const containsCharacter = (str, char) => {
    return str.includes(char);
}
console.log(containsCharacter("komal", "o"));
console.log(containsCharacter("ashu", "k"));



//takes two parameter and return their product
function sum(n1,n2){
return n1*n2
}
console.log(sum(2,3));



//person name and age and default value for age
function no(name, age=18){
return (`your name is ${name} or your age is ${age}`)
}
console.log(no("komal",20));
