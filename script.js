const container = document.querySelector(".container")

let numberofSquares = 1;

    

function createGrid(numSquares){
    for (let i = 0; i < numSquares * numSquares; i++){
        const square = document.createElement("div")
        square.classList.add("square");

        container.appendChild(square)
        
        // Calculate the width and height for each square
        const squareSize = 100 / numSquares;
        square.style.width = `${squareSize}%`; 
        square.style.height = `${squareSize}%`; 
    }
}

function inputnumberofSquares(){
    numberofSquares = prompt("Please enter the number of grid you want:");
    editGrid();
}

function editGrid(){
    container.innerHTML = '';
    createGrid(numberofSquares);
}

createGrid(numberofSquares);



