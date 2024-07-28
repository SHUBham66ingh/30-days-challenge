// task 1
let name = "shubham"
let age = 20;
let message = `my name is ${name} and my age is ${age}`;
console.log(message)
// task 2
let s1 = "my"
let s2 = "name"
let s3 = "is"
string = `${s1} ${s2} ${s3}`;
console.log(string)
// task 3
let a = [1,2,3,4,5];
const[first , second] = a;
console.log(first)
console.log(second)
// task 4 
const book = {
    title: "Wild Life",
    author: "Purav Jha"
}
const{title , author} = book
console.log(title)
console.log(author)
// task 5
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [...a1 , ...a2];
console.log(a3)
// task 6
function sum(...args)
{
return args.reduce((total, current) => total + current, 0)
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20, 30));   
console.log(sum(7, 14));
// task 7
function prod( a , b=1)
{
   let c =  a*b;
   console.log(c)
}
prod(5,10)
// task 8
const name = 'Alice';
const age = 30;

const person = {
    name, 
    age,  
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    incrementAge() {
        this.age++;
    }
};
console.log(person.name);
console.log(person.age);  
person.greet();           
person.incrementAge();
console.log(person.age);  
let key1 = 'name';
let key2 = 'age';

let value1 = 'shubham' ;
let value2 = '20';

let person1 = {
    [key1] : value1,
    [key2] : value2
}
console.log(person)


