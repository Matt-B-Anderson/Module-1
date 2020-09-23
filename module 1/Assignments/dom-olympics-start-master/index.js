var header = document.querySelector("#header")
header.textContent = "JavaScript Made This!!"
header.style.fontSize = "xx-large"
header.style.textAlign = "center"

var title = document.querySelector("#title")
title.style.fontSize = "medium"
title.style.textAlign = "center"

var author = document.querySelector("#author")
author.style.color = "gold"

var messages1 = document.querySelectorAll(".left");
for (var i = 0; i < messages1.length; i++) {
    messages1[0].textContent = "Hey man! You won't believe what I am doing. Guess What?";
    messages1[1].textContent = "I am changing the conversation that we are having as we speak!";

}

var messages2 = document.querySelectorAll(".right");
for (var y = 0; y < messages2.length; y++) {
    messages2[0].textContent = "What?";
    messages2[1].textContent = "NO WAY! Is that even possible? Can you read the future?";

}
var messages = document.querySelectorAll(".messages")
document.getElementById("clear-button").onclick = clearButton

function clearButton() {
    messages[0].textContent = " "

}

document.getElementById("theme-drop-down").onchange = theme
var themes = document.getElementById("theme-drop-down")

function theme() {
    console.log(themes.value)
    if (themes.value === "theme-two") {
        messages1.forEach(element => {
            element.style.backgroundColor = "red";
        });
        messages2.forEach(element => {
            element.style.backgroundColor = "black";
            element.style.color = "white";
        });


    } else if (themes.value === "theme-one") {
        messages1.forEach(element => {
            element.style.backgroundColor = "lightblue";
        });
        messages2.forEach(element => {
            element.style.backgroundColor = "burlywood";
            element.style.color = "black";
        });

    }

}
let messageToggle = false;
document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()
    messageToggle = !messageToggle;
    const direction = messageToggle ? "left" : "right";
    const newMessage = document.querySelector("#input").value
    const newDiv = document.createElement("div")
    newDiv.classList.add("message", direction)
    newDiv.innerText = newMessage
    document.querySelector(".messages").appendChild(newDiv)



}