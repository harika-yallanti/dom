//swapping 
let x=2
let y=5
x=x+y;
y=x-y;
x=x-y;
console.log("initial value x:2, after swapping x:"+x);
console.log("initial value y:5, after swapping y:"+y);

//reverse
let number=456;
let n=0;
let reverse=0;
while(number!==0)
{
    n=number%10;
    reverse=reverse*10+n;
    number=Math.floor(number/10);

}
console.log(reverse);

//prime no.s
let a=10;
for(let i=2;i<h;i++)
{
    let count=0;
    for(let j=1;j<=i;j++)
    {
         if(i%j==0)
            count++;
    }
    if(count==2)
    {
        console
    }
}
