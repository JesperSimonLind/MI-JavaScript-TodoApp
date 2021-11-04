class toDoValues {
  constructor(name, checked) {
    this.name = name;
    this.checked = checked;
  }
}

let toDoList = [];

let newTodo = new toDoValues("Träna", false);
let newTodo2 = new toDoValues("Plugga", false);
let newTodo3 = new toDoValues("Handla", false);
toDoList.push(newTodo);
toDoList.push(newTodo2);
toDoList.push(newTodo3);

let toDoContainer = document.createElement("div");
toDoContainer.className = "toDoContainer";

writeList();

function writeList() {
  toDoContainer.innerHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    let currentItem = toDoList[i];

    let ul = document.createElement("ul");
    ul.className = "listUl";

    let li = document.createElement("li");
    li.className = "listLi";
    li.innerHTML = currentItem.name;

    let doneButton = document.createElement("input");
    doneButton.setAttribute("type", "checkbox");
    doneButton.className = "doneButtons";

    let removeButton = document.createElement("button");
    removeButton.className = "removeButtons";
    removeButton.setAttribute("type", "button");
    removeButton.innerHTML = '<i class="bi bi-x-square-fill"></i>';

    let doneButtonContainer = document.createElement("li");
    let removeButtonContainer = document.createElement("li");
    doneButtonContainer.appendChild(doneButton);
    removeButtonContainer.appendChild(removeButton);

    let buttonStyle = li;

    doneButton.addEventListener("change", checkIfDone);

    function checkIfDone() {
      if (doneButton.checked == true) {
        buttonStyle.style.textDecoration = "line-through";
        currentItem.checked = true;
        ul.style.backgroundColor = "gray";
      } else {
        buttonStyle.style.textDecoration = "none";
        currentItem.checked = false;
        ul.style.backgroundColor = "white";
      }
    }

    toDoContainer.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(doneButtonContainer);
    ul.appendChild(removeButtonContainer);
  }
}

document.getElementById("container").appendChild(toDoContainer);
