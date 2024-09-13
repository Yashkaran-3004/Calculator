const display = document.getElementById('display');


function addToAppend( value){
    display.value += value;
}


function calculate(){
    try{
    let calculateValue = eval(display.value);
    display.value = calculateValue;
   }
   catch{
    display.value = "ERROR!";
   }
}

function clearDisplay(){
display.value = "";
}