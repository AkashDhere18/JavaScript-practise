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

let n=1235;
let t=0;

do{

    t = t + (n%10);
    // console.log(t)
    n = n/10;
    // console.log(n)

}while(n>1);

console.log(Math.round(t));