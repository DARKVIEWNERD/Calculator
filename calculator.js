let display=document.getElementById("display");

function calculateToDisplay(input){
  display.value+=input;
}
function clearResult(){
  display.value ="";
}
function calculate(){
  try{
    
    display.value=eval(display.value);
  }
  catch(error){
    display.value="error"
  }
  

}