const d = document;

export const shortCuts = (e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);

    if(e.key === "a" && e.ctrlKey){
        alert("Presionas a y ctrl !");
    }

}