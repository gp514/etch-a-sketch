let squares = 30; // default starting value
let hue = 0;

const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", reset);

container.style.gridTemplateColumns = "repeat(" + squares + " 1fr)";
container.style.gridTemplateRows = "repeat(" + squares + " 1fr)";

init();

function init(){
    generateSquares(squares);
}

function reset(){
    let clearPrompt = prompt("How many squares per side? (Max 64)");
    if(clearPrompt >= 1 && clearPrompt <= 64) squares = clearPrompt;
    else if(!clearPrompt) return;
    clearSquares();
    generateSquares(squares);
}

function clearSquares(){
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

function generateSquares(numSquares){
    container.style.gridTemplateColumns = "repeat(" + numSquares + " 1fr)";
    container.style.gridTemplateRows = "repeat(" + numSquares + " 1fr)";

    for(let i = 1; i <=  numSquares; i++){
        for(let j = 1; j <= numSquares; j++)
        {
            const etchSquare = document.createElement("div");
            etchSquare.style.gridArea = i + " / " + j;
            etchSquare.dataset.customVariable = 0;
            etchSquare.addEventListener("mouseenter", changeColor);
            container.appendChild(etchSquare);
        }
    }
}

function changeColor(){
    hue +=1;
    lightnessFactor = this.dataset.customVariable;
    console.log(lightnessFactor);
    this.style.backgroundColor = "hsl(" + hue + ", 100%, " + (50 - lightnessFactor*5) + "%)";
    let incrementLightness = parseInt(this.dataset.customVariable);
    if(incrementLightness < 10) this.dataset.customVariable  = ++incrementLightness;
}