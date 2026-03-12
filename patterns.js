
//Pattern 1
// function pattern1(n){
    
//     for(let i=1; i<=n; i++){
//         row="";
//         for(let j=1; j<=n; j++){
//             row += "* ";
//         }
//         console.log(row);
//     }
// }

// pattern1(3);

//Pattern 2
// function pattern2(n){
//     for(let i=1; i<=n; i++){
//         row ="";
//         for(let j=1; j<=i; j++){
//             row += "* "
//         }
//         console.log(row);
//     }
// }

// pattern2(5)

//Pattern 3
// function pattern3(n){
//     for(let i=n; i>=1; i--){
//         row ="";
//         for(let j=1; j<=i; j++){
//             row += "* "
//         }
//         console.log(row);
//     }
// }

// pattern3(5)

//Pattern 4
// function pyramid(n){
//     for(let i=1; i<=n; i++){
//         s = n-i;
//         row =" ".repeat(s);
//         for(let j=1; j<=i; j++){
//             row += "* "
//         }
//         console.log(row);
//     }
// }

// pyramid(5)

//Pattern 5
// function diamond(n){
//     for(let i=1; i<=n; i++){
//         s = n-i;
//         row =" ".repeat(s);
//         for(let j=1; j<=i; j++){
//             row += "* "
//         }
//         console.log(row);
//     }

//     for(let i=n-1; i>=0; i--){
//         s = n-i;
//         row =" ".repeat(s);
//         for(let j=1; j<=i; j++){
//             row += "* "
//         }
//         console.log(row);
//     }
// }

// diamond(5)


//Pattern 6 number pyramid

// function numberPyramid1(n){
//     for(i=1; i<=n; i++){
//         s=n-i
//         row=" ".repeat(s)
//         for(j=1; j<=i; j++){
//             row+=i+" "
//         }
//         console.log(row)
//   }
// }
// numberPyramid1(5)

// function numberPyramid2(n){
//     for(i=1; i<=n; i++){
//         s=n-i
//         row=" ".repeat(s)
//         for(j=1; j<=(2*i-1); j++){
//             row+=  i 
//         }
//         console.log(row)
//   }
// }
// numberPyramid2(5)

//Pattern 7 pascal Triangle

// function pascletriangle(n){

// }


//Pattern 8 hollow square

// function printHollowSquare(n){
//     for(i=1; i<=n; i++){
//         row = "";
//         for(j=1; j<=n; j++){
//             if(  i==1 || i==n || j==n || j==1){
//                 row += "* "
//             }
//             else{
//                 row +="  "
//             }
//         }

//         console.log(row)
//     }
// }

// printHollowSquare(3)


//Pattern 9 Hourglass pattern

// function hourglass(n){
//     for(i=n; i>1; i--){
//         s=n-i
//         row=" ".repeat(s)
//         for(j=1; j<=(2*i-1); j++){
//             row+= "*"
//         }

//         console.log(row)
//     }
//     for(i=1; i<=n; i++){
//         s=n-i
//         row=" ".repeat(s)
//         for(j=1; j<=(2*i-1); j++){
//             row+= "*"
//         }

//         console.log(row)
//     }
// }

// hourglass(4)

//Pattern 10 zig-zag