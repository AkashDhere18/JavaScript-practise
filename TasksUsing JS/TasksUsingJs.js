// ****# Task 1 count no of words in sentence #****

// let str = "this is the sentence to count the no of words in sentence"

// function countWords(){
//     str = str.split(" ")
//     // console.log(str)
//     count = 0
//     for(i=0; i<str.length; i++){
//         if(str[i] != ""){
//             count++
//         }
//     }
//     return count
// }

// console.log("No of Word's are : ",countWords())

// ****# Task 2 to find longest word in string# ****

// let str = "this is string to find longest word paracetomol in string"

// function longestWord(){
//     str = str.split(" ")

//     let maxN = str[0].length;
//     let longestWord = str[0];
//     for(i=0; i<str.length; i++){

//         if(str[i].length > maxN){
//             maxN = str[i].length
//             longestWord = str[i]
//         }

//     }

//     return console.log("Longest word is " + longestWord + " length is " + maxN)
// }

// longestWord()

//****# Task 3 remove falsy values from array #****

// const mixedArray = [0, 1, false, true, '', 'hello', null, undefined, NaN];

// function removeFalsy(){                             //method 1
//     for(let i=mixedArray.length-1; i>=0; i--){
//         if(!mixedArray[i]){
//             mixedArray.splice(i,1)
//         }
//     }
//     console.log(mixedArray)
// }

// function romoveFalsyVal(arr){       //method 2
//     return arr.filter(Boolean)
// }

// removeFalsy()
// console.log(romoveFalsyVal(mixedArray))


//****# Task 4 find second largest no in array #****

// let arr1 = [55,46,57,23,85,65,54,47,45,12,65]

// function sortarr(){
// 
//     for(let i=0; i<arr1.length; i++){
//         for(let j=i+1; j<arr1.length; j++){
//             if(arr1[i] < arr1[j] ){
//                 temp = arr1[i]
//                 arr1[i]=arr1[j]
//                 arr1[j]=temp
//             }
//         }
//     }
//     // console.log(arr1)

//     return console.log("Second largest no in array is : ",arr1[1])
// }

// sortarr()


//****# Task 5 Sort array without using builtin sort method #****

// let arr2 = [55,89,65,111,56,48,4,456,47]

// function sortA(){
//     for(let i=0; i<arr2.length-1; i++){
//         for(let j=i+1; j<arr2.length; j++){
//             temp = arr2[i]
//             if(arr2[j] < arr2[i]){
//                 arr2[i] = arr2[j]
//                 arr2[j] = temp
//             }
//         }
//     }
//     return console.log("Array sorted in assending order is :",arr2)
// }

// sortA()