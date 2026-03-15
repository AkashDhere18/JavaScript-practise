let inputElement = document.querySelector("#marksInput")
let outputElement = document.querySelector("#Calculated-marks")

let Marks=[];

function addMarks(){
    let inputValue = inputElement.value;

    if(inputValue>=0){
        Marks.push(Number(inputValue));
    }
    else{
        alert("Invalid marks")
    }
    console.log(Marks)

    inputElement.value = "";
}


function calculateMarks(){
    
    let marksLen = Marks.length
    // console.log(marksLen)

    let total=0
    let average
    let highest
    let lowest
    
    for(i=0; i<marksLen; i++){
        total+=Marks[i]
    }

    let sorted = Marks.sort((a,b) => a - b)
    // console.log(total)
    // console.log(sorted)
    
    average = total/marksLen
    // console.log(average)
    highest=sorted[marksLen-1]
    // console.log(highest)
    lowest=sorted[0]
    // console.log(lowest)

    document.querySelector("#total").innerHTML = total
    document.querySelector("#average").innerHTML = average.toFixed(2)
    document.querySelector("#highest").innerHTML = highest
    document.querySelector("#lowest").innerHTML = lowest

}

function clearAll(){
    Marks=[]
    
    document.querySelector("#total").innerHTML = 0
    document.querySelector("#average").innerHTML = 0
    document.querySelector("#highest").innerHTML = 0
    document.querySelector("#lowest").innerHTML = 0
}