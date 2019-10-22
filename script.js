//change custom text
const customInput = document.getElementById("custom-text");

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


//change font size

let fontSelect = document.getElementById("font-size");

function changeFontSize(e){
  let fontCards = document.querySelectorAll(".font-preview p");

  console.log(e.target.value);

  for (let i=0; i < fontCards.length; i++) {
    fontCards[i].style.fontSize = `${e.target.value}px`;  
  }
}

fontSelect.onchange = changeFontSize;

