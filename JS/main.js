window.onload = function () {
  writeList();
};
class ToDoValues {
  constructor(name, checked) {
    this.name = name;
    this.checked = checked;
  }
}

let toDoList = [];

let newToDo = new ToDoValues("Träna", false);
let newToDo2 = new ToDoValues("Träna", false);
let newToDo3 = new ToDoValues("Träna", false);

toDoList.push(newToDo);
toDoList.push(newToDo2);
toDoList.push(newToDo3);

let toDoContainer = document.createElement("div");
toDoContainer.className = "toDoContainer";

function writeList() {
  toDoContainer.innerHTML = "";

  for (let i = 0; i < toDoList.length; i++) {
    let currentItem = toDoList[i];
    let ul = document.createElement("ul");
    ulElement.className = "itemsUl";

    let li = document.createElement("li");
    li.className = "li";
    li.innerHTML = currentItem.name;

    let doneButton = document.createElement("input");
  }
}
