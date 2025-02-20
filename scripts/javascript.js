const container = document.querySelector("#container");

// create 16 x 16 grid of squares - 256 total squares
for (let i = 0; i < 256; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.setAttribute("class","square");
    container.appendChild(squareDiv);
}

// add event listeners to all squares to trigger on mouseover
let squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
    let currentSquare = squares[i];
    currentSquare.addEventListener("mouseover", (event) => {
        event.target.setAttribute("class", "black-square");
    });
}

// add function to prompt for user input on button click
const pixelButton = document.querySelector("#set-pixel-btn");

pixelButton.addEventListener("click", (event) => {
    let pixelCount = 0;
    while (pixelCount < 4 || pixelCount > 100) {
        pixelCount = prompt("Enter a number of squares for each side of the grid (between 4 and 100)");
    }
    
    // remove previous grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    // generate new grid
    for (let i = 0; i < pixelCount * pixelCount; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute("class","square");
        container.appendChild(squareDiv);
    }

    let squares = document.querySelectorAll(".square");
    
    // set width of squares
    let widthPercentage = (100/pixelCount);
    let newWidth = widthPercentage + "%";
    squares.forEach(function (square) {
        square.style.width = newWidth;
    });

    // add event listeners to new grid
    for (let i = 0; i < squares.length; i++) {
        let currentSquare = squares[i];
        currentSquare.addEventListener("mouseover", (event) => {
            event.target.setAttribute("class", "black-square");
        });
    }
})