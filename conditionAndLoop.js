//Example 1

// let exp = prompt('Enter exp in yrs');
// let sal =prompt('Enter sal in nos');

// if(exp > 1 ){
//     console.log("Barfi");
//     if(sal > 100000){
//         console.log("Kajukatli");
//     }
//     else{
//         console.log("Gulabjamun");
//     }
// }
// else{
//     console.log("Sonpapdi")
//     if(sal > 1){
//         console.log("Kajukatli");
//     }
//     else{
//         console.log("Gulabjamun");
//     }

// }

//                  Ass 1  :-  No cheaker + - or 0

// let num = prompt("Enter no to chech +ve or -ve");

// if(num < 0){
//     console.log(num ,"is negative" );
// }
// else{
//     console.log(num ,"is positive");
// }


//                  Ass 2  :- Multiplication table


// let no = prompt("Enter no to get table")

// for(i=1 ; i<=10 ; i++){
//     console.log(no ,'x',i,'=',no*i )
// }


//                  Ass 3  :- No gusseing game

// let randomNo =Math.floor( Math.random()*10);
// console.log(randomNo);
// console.log("guess no in 3 chance");

// for(i=1; i<=3; i++){
//     let gussedNo = prompt("guess no");

//     if(gussedNo == randomNo){
//         console.log("correct guess");
//     }
//     else if(gussedNo > randomNo){
//         console.log("Your gussed no is big");
//     }
//     else{
//         console.log("Your gussed no is small")
//     }
// }

// console.log("Out of attempts (loss) ")


//                  Ass 4  :- Print even no

// for(i=1 ; i<=20; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }


//                  Ass 5  :- Sum of digits


// let n=1235;
// let t=0;

// do{

//     t = t + (n%10);
//     // console.log(t)
//     n = Math.floor(n/10);
//     // console.log(n)

// }while(n>0);

// console.log(t);


//                  Ass 6  :- FizzBuzz problem


// for(let i=0; i<=50; i++){

//     if( i%3 === 0 && i%5 === 0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3 === 0){
//         console.log("Fizz");
//     }
//     else if(i%5 === 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }


//                  Ass 7  :- Prime no cheaker
// let n=99;
// let no = 0;

//  for(let i=2; i<=(n/2); i++){
//     if(n%i === 0){
//         no++;
//     }
//  }
//  console.log(no);
//  if(no === 0){
//     console.log("Prime Num")
//  }
//  else{
//     console.log("Not a prime")
//  }


//                  Ass 9  :- Find largest of 3 no
// let n1 =24;
// let n2 =121;
// let n3 =191;

// if(n1>n2 && n1>n3){
//     console.log("greater is n1: ",n1);
// }
// else if(n2>n1 && n2>n3){
//     console.log("greater is n2:",n2);
// }
// else{
//     console.log("greater is n3:",n3);
// }


//                  Ass 11  :- Count vowels and consonents

// let str = "Hello Javascript";
// let vowles = "aeiouAEIOU"
// let strModified = str.replaceAll(" ", "");
// let vowelsCount = 0;
// for (i = 0; i < strModified.length; i++) {
//     if (vowles.includes(strModified.charAt(i) ) === true) {
//         vowelsCount++;
//     }
// }

// console.log("Vowels =", vowelsCount);
// console.log("Consonents =", strModified.length - vowelsCount);


//                  Ass 12  :- Reverse a No

// let num = 12345;
// let numStr = num.toString();
// let reverseNum ="";

// for(let i=numStr.length-1; i >= 0; i--){
// //    console.log(i);
//    reverseNum = reverseNum + numStr[i];
// }

// console.log(Number(reverseNum));


//                  Ass 13  :- Sum of odd and even no


// let sumofOdd =0;
// let sumofEven =0;

// for(let i=0; i<=100; i++){
//     if(i%2 == 0){
//         sumofEven += i;
//     }
//     else{
//         sumofOdd += i;
//     }
// }

// console.log("Sum of even no =",sumofEven);
// console.log("Sum of odd no =",sumofOdd);


//                  Ass 14  :- Factorial using while loop


// let num=5;
// let factorial = 1;

// while(num>0){
//     factorial = factorial*num;
//     num=num-1;
// }

// console.log(factorial);


//                  Ass 15  :- Average of n numbers


// let numbers=[50,10,20,15]
// let sum=0;
// for(i=0; i<=numbers.length-1; i++){
//     sum+=numbers[i];
// }

// console.log(sum)


//                  Ass 16  :- Leap year cheaker


// let year=1900

// if(year%4 === 0 && year%100 !== 0 || year%400 === 0){
//     console.log("Leap Year")
// }
// else{
//     console.log("Not Leap Year")
// }


//                  Ass 17  :- Divisors of no

// let num = 12;
// let divisors ="";

// for(i=1; i<=num; i++){
//     if(num%i === 0){
//         divisors = divisors + " " +i
//     }
// }

// console.log("dividors are:",divisors)


//                  Ass 18  :- Fibonacci sequence


// let n=20;

// let n1 = 0;
// let n2 =1;

// let sequence="0,1"
// while((n-2)>=1){

//     n3 = n1+n2
    
//     n1=n2;
//     n2=n3;
    
//     sequence+= ","+n3
//     n--
// }
// console.log(sequence)

//                  Ass 19  :- Armstrong No cheaker

// let num = 10;
// let numStr=num.toString()
// let len1 =numStr.length
// let digitsSum =0;

// for(i=0; i<len1; i++){
//     // console.log(numStr.charAt(i))
//     strTOnum = parseInt(numStr.charAt(i))
//     // console.log(typeof(strTOnum))
//     digitsSum+= Math.pow(strTOnum,len1)
//     // console.log(digitsSum)
// }

// if(digitsSum == num){
//     console.log(num,"is a Armstrong No.")
// }
// else{
//     console.log(num,"is not a Armstrong No.")
// }