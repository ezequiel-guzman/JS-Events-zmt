var input = document.getElementById("myInput");
var button = document.getElementById("myButton");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createNewTodo() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addIfClicked() {
  if(inputLength() > 0) {
    createNewTodo();
  }
}

function addIfPressed(element) {
  if(inputLength() > 0 && element.keyCode === 13) {
    createNewTodo();
  }
}

button.addEventListener("click", addIfClicked);
input.addEventListener("keypress", addIfPressed);

