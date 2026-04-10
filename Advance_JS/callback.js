
function fetchData(callback){
    setTimeout(()=>{
        const data = {Name:"Akash", Age:22}
        callback(data)
    },2000);
}

function displayData(data){
    console.log("Data:",data)
}

fetchData(displayData)

//

function readfile(callback){
    setTimeout(()=>{
        const data = "this is file data"
        callback(data);
    },3000);
}

readfile((data)=>{
    console.log("Data:" , data);
})