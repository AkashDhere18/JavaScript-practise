inputElement = document.getElementById("inputBox");
outputElement = document.getElementById("outputBox");



function countVowels(){
    let inputValue = inputElement.value;
    let vowels ="aeiouAEIOU";
    let vowelCount = 0;

    len1 = inputValue.length;

    for( i=0; i<len1; i++){
        if(vowels.includes(inputValue.charAt(i))){
            vowelCount++
        }
    }
    
    return outputElement.innerHTML = 'Vowels in parapgraph : ' + vowelCount
}

function palindromChek(){
    inputValue = inputElement.value;
    inputRev = "";
    len1 = inputValue.length;

    for(let i=len1-1; i>=0; i--){
        inputRev += inputValue.charAt(i);
    }

    if(inputValue == inputRev  ){
         outputElement.innerHTML = "It's a palindrom";
    }
    else{
         outputElement.innerHTML = "It's not a palindrom";
    }
}

function firstWord_ofSentence(){
    inputValue = inputElement.value
    inputValue_splited = inputValue.split(" ")
    // console.log(inputValue_splited) 

    firstWord = inputValue_splited[0]
    console.log(firstWord)

    return outputElement.innerHTML = "First word of Sentence is :" + firstWord;
}

function replaceSpace(){
    inputValue =inputElement.value;

    result = inputValue.replaceAll(" "  , "_")

    outputElement.innerHTML = result;
}

function stringToArray(){
    inputValue = inputElement.value;
    newArray = inputValue.split(" ")

    outputElement.innerHTML = "Generated Array is :" + newArray
}

function string_start_end_with_sameChar(){
    inputValue = inputElement.value;

    firstCh = inputValue.charAt(0);
    lastCh = inputValue.charAt(inputValue.length-1);

    if(firstCh === lastCh){
        outputElement.innerHTML = "True";
    }
    else{
        outputElement.innerHTML = "False";
    }
}
// function eactWordUppercase(){
//     inputValue = hgfg ;

//     let updatedValue = inputValue.toTitleCase()
//     console.log(updatedValue)
// }

function numberOfOccurance(){
    inputValue = inputElement.value
    specificWord = prompt("Enter the character to count no of occurance")
    // console.log(specificWord)
    toArray = inputValue.split(" ")
    // console.log(toArray)
    occurance= 0;

    for(i=0; i<=toArray.length-1; i++){
        if(toArray[i] === specificWord){
            occurance++
        }
    }

    return outputElement.innerHTML = `No of occurance of ${specificWord} :` + occurance
}