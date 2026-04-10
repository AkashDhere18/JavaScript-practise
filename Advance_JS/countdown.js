
function countdown(sec){
    let remaning = sec;
    const timer = setInterval(()=>{
        console.log(`${remaning}` ,"seconds remaning");
        remaning--;
         if(remaning < 0 ){
            clearInterval(timer);
            console.log("Time up");
         }
    },1000)

}

countdown(3)