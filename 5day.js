// task 1
function EvenOrOdd(num)
{
    if(num%2==0)
    {
        console.log("number is even");
    }
    else 
    {
        console.log("number is odd");
    }
}
EvenOrOdd(102);
// task 2
function Square(num)
{
    let a = num*num;
    console.log(a);
}
Square(10)
// task 3
function max(num1 , num2)
{
    if(num1>num2)
    {
        console.log("num1 is greater than num2");
    }
    else
    {
        console.log("num2 is greater than num1");
    }
}
max(10,20)
// task 4
function concatenate(str1 , str2)
{
  return str1 + str2
}
const result = concatenate( "hello"  ,  "shubham")
console.log(result)
// task 5
let sum = (a,b) =>
{
    let c = a*b
    console.log(c)
}
sum(2,3)
// task 6
let containChar = (str , char) =>  str.includes(char)

console.log(containChar("hello" , "e"));
// task 7
function prod(a , b=1 )
{
     c=a*b;
     console.log(c);
}
prod(4,6)
// task 8
function greetings(name , age)
{
   console.log(`hello ${name} , your age is ${age}`);
}
greetings("shubham" , 20)
// task 9
const repeatFunction = (func , times) => {
    for(let i=0;i<times;i++)
    {
        func()
    }
}
sayHello = () =>{
    console.log("hello");
}
repeatFunction(sayHello , 2)
// task 10
const twoFunction = (func , funct ,  value) =>
{

}
 







