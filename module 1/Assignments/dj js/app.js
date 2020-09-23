var square = document.getElementById("square");

document.addEventListener("mouseover", colorBlue);

function colorBlue() {
    square.style.backgroundColor = "blue";
}

document.addEventListener("mousedown", colorRed);

function colorRed() {
    square.style.backgroundColor = "red";
}
document.addEventListener("mouseup", colorYellow);

function colorYellow() {
    square.style.backgroundColor = "yellow";
}
document.addEventListener("dblclick", colorGreen);

function colorGreen() {
    square.style.backgroundColor = "green";
}
document.addEventListener("wheel", colorOrange);

function colorOrange() {
    square.style.backgroundColor = "orange";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "b") {
        square.style.backgroundColor = "blue";
    }
})

document.addEventListener("keydown", function(event) {
    if (event.key === "r") {
        square.style.backgroundColor = "red";
    }
})

document.addEventListener("keydown", function(event) {
    if (event.key === "y") {
        square.style.backgroundColor = "yellow";
    }
})

document.addEventListener("keydown", function(event) {
    if (event.key === "g") {
        square.style.backgroundColor = "green";
    }
})

document.addEventListener("keydown", function(event) {
    if (event.key === "o") {
        square.style.backgroundColor = "orange";
    }
})