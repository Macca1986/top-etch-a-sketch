console.log("hello world");

const container = document.querySelector("#container");
console.log(container);

for (let i = 0; i < 16; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class","square");
    container.appendChild(squareDiv);
    console.log(i);
}

// event listeners
const squares = document.querySelectorAll(".square");
console.log(squares);

// for (let i = 0; i < squares.length; i++) {
//     const currentSquare = squares[i];
//     currentSquare.addEventListener("onclick", () => {
//         currentSquare.setAttribute("class", "black-square");
//         console.log("square " + i + " was clicked");
//     });
//     console.log("added event listener to square " + i);
// }

squares[0].addEventListener("onclick", (event) => {
    event.target.setAttribute("class", "black-square");
    console.log("square 0 was clicked");
});