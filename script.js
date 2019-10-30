//add custom text and display on font preview elemnent
let customInput = document.getElementById("custom-text");

function changeCustomText(e){

  let fontCardPreviewTexts = document.querySelectorAll(".font-preview p");

  fontCardPreviewTexts.forEach(fontCardPreviewText => {
  
    if(e.target.value != ""){

      fontCardPreviewText.innerText = `${e.target.value}`;

    }else{
    
      fontCardPreviewText.innerText = `Then come the night of the first falling star.`;
    
    }
  
  })
}

customInput.oninput = changeCustomText;


//change font size for all font preview text

let fontSelect = document.getElementById("font-size");
let fontCards = document.querySelectorAll(".font-preview p");

function changeFontSize(e){

  fontCards.forEach(fontcard =>{
    fontcard.style.fontSize = `${e.target.value}px`;
  })

}

fontSelect.onchange = changeFontSize;

//reset button
const resetButton = document.getElementById("reset");

function reset(){

  let resetCustomText = {
    target: {
      value: ""
    }
  }

  let resetFont = {
    target: {
      value: 20
    }
  }  

  customInput.value = "";
  fontSelect.value = "20";
  changeCustomText(resetCustomText);
  changeFontSize(resetFont);
}

resetButton.onclick = reset;

//dark/light mode

const light = document.getElementById("white");
const dark = document.getElementById("black");

//dark
function turnOnDarkMode() {
  document.documentElement.style.setProperty('--background-color', 'black');
  document.documentElement.style.setProperty('--font-color', 'white');

}

dark.addEventListener("click", turnOnDarkMode);

//light
function turnOnLightMode() {
  document.documentElement.style.setProperty('--background-color', 'white');
  document.documentElement.style.setProperty('--font-color', 'black');
}

light.addEventListener("click", turnOnLightMode);


