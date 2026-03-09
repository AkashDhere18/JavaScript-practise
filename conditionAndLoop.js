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

//Ass 1

// let num = prompt("Enter no to chech +ve or -ve");

// if(num < 0){
//     console.log(num ,"is negative" );
// }
// else{
//     console.log(num ,"is positive");
// }

//Ass 2

// let no = prompt("Enter no to get table")

// for(i=1 ; i<=10 ; i++){
//     console.log(no ,'x',i,'=',no*i )
// }

//Ass 3
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

//Ass 4
// for(i=1 ; i<=20; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

//Ass 5

// let n=1235;
// let t=0;

// do{

//     t = t + (n%10);
//     // console.log(t)
//     n = Math.floor(n/10);
//     // console.log(n)

// }while(n>0);

// console.log(t);

//Ass 6

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

//Ass 7
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


//Ass 9
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

//Ass 11

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

//Ass 12
// let num = 12345;
// let numStr = num.toString();
// let reverseNum ="";

// for(let i=numStr.length-1; i >= 0; i--){
// //    console.log(i);
//    reverseNum = reverseNum + numStr[i];
// }

// console.log(Number(reverseNum));


//Ass 13

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


//Ass 14

// let num=5;
// let factorial = 1;

// while(num>0){
//     factorial = factorial*num;
//     num=num-1;
// }

// console.log(factorial);
