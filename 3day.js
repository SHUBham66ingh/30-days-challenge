// task 1
let a = 10
if(a>0)
{
    console.log(`${a} is positive`)
}
else if (a<0)
{
    console.log(`${b} is negative`)
}
else{
    console.log(`${c}  is zero`)
}
// task 2
let age= 10
if(age>18)
{
  console.log("person is eligible")
}
else if (age<18)
{
    console.log("person is not eligible")
}
// task 3
let x=1
let y=2
let z=3
if(x>z && x>y)
{
    console.log("x is the greatest element")
}  
else if(y>z && y>x)
{
    console.log("y is the greatest")
}
else if(z>x&&z>y)
{
    console.log("z is greatest")
}
// task 5
let day = 7
switch(day)
{
    case 0:
    day="sunday"
    break

    case 1:
    day="monday"
    break

    case 2:
    day="tuesday"
    break

    case 3:
    day="wednesday"
    break

    case 4:
    day="thursday"
    break

    case 5:
    day="friday"
    break

    case 6:
    day="saturday"
    break
    
}
// task 6
let num=10;
console.log((num%2==0) ? 'positive' : 'negative')

// task 7
let year = 2000;
if(((year%4==0) && (year%100!=0))  || (year%400==0))
{
    console.log("year is a leap year");
}
else{
    console.log("year is not a leap year");
}




