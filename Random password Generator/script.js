let displayValue = document.querySelector("#inputBox");
let passwordLength = document.querySelector("#passlength");
let generateButton = document.querySelector("#generateButton");



let newArray = ["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","]","{","}",">","?","<"];


function createPassword(){
  let rangeValue = passwordLength.value;
  let storeValue = '';
  
  if(rangeValue===""||rangeValue ===null){
    displayValue.value = `Please Enter Password range`
  }

 else{
  for(let i = 0;i<rangeValue;i++){
    let random = Math.floor(Math.random()*newArray.length);
    storeValue += newArray[random]
}
displayValue.value = storeValue;
 }
 

}


generateButton.addEventListener("click", createPassword);

document.querySelector("#copyImage").addEventListener("click",()=>{
  displayValue.select();
  document.execCommand("copy")
})