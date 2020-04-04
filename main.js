const squares = 16;

const container = document.querySelector(".container");
container.style.gridTemplateColumns = "repeat(" + squares + " 1fr)";
container.style.gridTemplateRows = "repeat(" + squares + " 1fr)";


for(let i = 1; i <=  squares; i++){
    for(let j = 1; j <= squares; j++)
    {
        const etchSquare = document.createElement("div");
        etchSquare.style.gridArea = i + " / " + j;
        etchSquare.addEventListener("mouseenter", changeColor);
        container.appendChild(etchSquare);
    }
}

function changeColor(){
    this.style.backgroundColor = "black";
}