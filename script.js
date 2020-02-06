//add custom text and display on font preview elemnent
let customInput = document.getElementById("custom-text");

function changeCustomText(e){

  let fontCardPreviewTexts = document.querySelectorAll(".font-preview p");

  fontCardPreviewTexts.forEach(fontCardPreviewText => {
  
    if(e.target.value != ""){

      fontCardPreviewText.innerHTML = `${e.target.value}`;

    }else{
    
      fontCardPreviewText.innerHTML = `Then come the night of the first falling star.`;
    
    }
  
  })
}

customInput.oninput = changeCustomText;


//change font size for all font preview text

let fontSelect = document.querySelector("#font-size");
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
  grid.classList.add("dark-active");
  resetButton.classList.add("dark-active");
}

dark.addEventListener("click", turnOnDarkMode);

//light
function turnOnLightMode() {
  document.documentElement.style.setProperty('--background-color', 'white');
  document.documentElement.style.setProperty('--font-color', 'black');
  grid.classList.remove("dark-active");
  resetButton.classList.remove("dark-active");
}

light.addEventListener("click", turnOnLightMode);

//change display icon to flip between a grid and list layout for the font cards

const grid = document.getElementById("adjust-grid");
const fontCard = document.getElementsByClassName("font-card");

function adjustGrid(){
    for (i = 0; i < fontCard.length; i++) {
    fontCard[i].style.width = "100%";
  }
}

grid.addEventListener("click", adjustGrid);


//fetch google fon api

const API_KEY = 'AIzaSyCQ0Kc3eH94rnd1JLupRe4tAZXDamnLP88';
const FETCHURL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=popularity`;

function fetchData(){
  fetch(FETCHURL)
    .then(response => {
      if(!response.ok){
        throw Error("ERROR")
      }
      return response.json()
    })
    .then(data => {

      const html = data.items.map(item => {

        const sectionFontCard = document.querySelector("#font-card-main-container");

        //Create div for font card
        const fontCardDiv = document.createElement('div');
        fontCardDiv.className = 'font-card';

        sectionFontCard.append(fontCardDiv);

        const fontCardInfoDiv = document.createElement('div');
        fontCardInfoDiv.className = 'font-card-info';

        const DesignerNameDiv = document.createElement('div');
        DesignerNameDiv.className = 'designer-name';

        const fontPreviewDiv = document.createElement('div');
        fontPreviewDiv.className = 'font-preview';
         

        fontCardDiv.append(fontCardInfoDiv);
        fontCardDiv.append(DesignerNameDiv);
        fontCardDiv.append(fontPreviewDiv);

        const fontTitleH1 = document.createElement('h1')
        fontTitleH1.className = 'font-title';

        fontTitleH1.textContent = `${item.family}`;
        fontCardInfoDiv.append(fontTitleH1);

        const fontCardInfoBtn = document.createElement('button')
        fontCardInfoBtn.className = 'plus-icon';

        const fontCardInfoBtnI = document.createElement('i')
        fontCardInfoBtnI.className = 'fas fa-plus-circle';

        fontCardInfoDiv.append(fontCardInfoBtn);
        fontCardInfoBtn.append(fontCardInfoBtnI);

        const DesignerNameDivPara = document.createElement('p')
        DesignerNameDivPara.textContent = 'Christian Robertson';

        DesignerNameDiv.append(DesignerNameDivPara);

        const fontPreviewDivPara = document.createElement('p')
        fontPreviewDivPara.innerHTML = `Then come the night of the first falling star.`
        fontPreviewDivPara.style.fontFamily = `${item.family}`;

        fontPreviewDiv.append(fontPreviewDivPara);        
         
      })
      .join(" ");
      // document.querySelector("#font-card-main-container").insertAdjacentHTML("afterbegin", html);
      // sectionFontCard.append(html);
      return sectionFontCard.append(html);
      
      
    }).catch(error => {

      console.log(error)

    })

}

fetchData()

