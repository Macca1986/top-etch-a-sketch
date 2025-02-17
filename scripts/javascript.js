const container = document.querySelector("#container");

// create 16 x 16 grid of squares - 256 total squares
for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class","square");
    container.appendChild(squareDiv);
}

// add event listeners to all squares to trigger on mouseover
const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
    let currentSquare = squares[i];
    currentSquare.addEventListener("mouseover", (event) => {
        event.target.setAttribute("class", "black-square");
    });
}
