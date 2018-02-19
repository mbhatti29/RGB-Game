var numSquares = 6;
var colors = []; //generate 6 different colors randomly
var pickedColor; //target the squares
var messageDisplay = document.getElementById("message"); //display goodjob or try again!
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay"); //rgb color display on header
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1"); //change the background color of header
var resetButton = document.getElementById("reset"); //reset the game
colorDisplay.textContent = pickedColor;


init();

function init() {
    //mode button event listeners
    setUpModeButton();
    setUpSquares();
    reset();
}

function setUpModeButton() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; //if statement
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) { //add initial colors to squares //add click listeners to squares
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Good Job!";
                resetButton.textContent = "Play Again";
                changeColor(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323"; //or color of background -- this.style.background = "# 232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //change header color to initial color
    messageDisplay.textContent = "";
    //need to change colors of square on page
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() { //reset should start game again
    reset();
});


function changeColor(color) {
    //loop through all squares
    //change each color to match given colors
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num) { //add random colors to the array 'arr'
    var arr = [];
    for (var i = 0; i < num; i++) { //add num random colors to array;
        arr.push(randomColor());
    }
    return arr;
}


function randomColor() { //makes random RGB color up to 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
