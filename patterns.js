
//1
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

//2
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

//3
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

function pyramid(n){
    for(let i=1; i<=n; i++){
        row ="" + (n*i," ");
        for(let j=1; j<=i; j++){
            row += "* "
        }
        console.log(row);
    }
}

pyramid(4)