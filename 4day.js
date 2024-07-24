// task 1
 for (let index = 1; index <=10; index++) {
     console.log(index);  
 }
// task 2
 const a =5;
 for (let index = 1; index <=10; index++) {
    console.log(index*a);  
}
// task 3
sum =0;
i=0;
while( i < 10)
{
    sum = sum + i;
    i++;
}
console.log(sum);
// task 4
i=10;
while (i>0)
{
    console.log(i);
    i--;
}
// task 5
let i = 1;
do {
    console.log(i);
    i++; 
} while (i <= 5); 
// task 7
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
// task 8
for(let l =1 ; l <= 10 ; l++)
{
      if(l==5)
      {
        continue;
      }
      else
      {
        console.log(l);
      }
}
// task 9
for(let l =1 ; l <= 10 ; l++)
    {
          if(l==7)
          {
          break;
          }
          else
          {
            console.log(l);
          }
    }