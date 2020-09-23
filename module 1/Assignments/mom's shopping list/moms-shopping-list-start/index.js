document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()
    const newLi = document.createElement("li");
    const newDiv = document.createElement("div");
    const newMessage = document.querySelector(".input").value;
    const clearBtn = document.createElement("button");
    clearBtn.innerText = "X";
    const edit = document.createElement("button");
    edit.innerText = "edit";
    newDiv.classList.add("addItem");
    newDiv.innerText = newMessage;

    newLi.appendChild(newDiv);
    newLi.appendChild(edit);
    newLi.appendChild(clearBtn);
    console.log(newLi)
    document.querySelector("#list").appendChild(newLi);

    var ul = document.querySelector("#list");
    clearBtn.addEventListener("click", function() {
        ul.removeChild(newLi);
    })
}