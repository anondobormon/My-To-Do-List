let ul = document.getElementById("task-name");
let completedTask = document.getElementById("completedTask");



function addTasks() {
  let input = document.getElementById("new-task");
  checkTask(input);
  input.value = "";
}

function checkTask(input) {
  let li = document.createElement("li");
  li.className = "taskLI";
  li.innerHTML = `
    <input name="check-button" id="task" type="checkbox"><label>${input.value}</lable>
    `;
  if (input.value != "") {
    ul.appendChild(li);
  }
}

//incomplete task area functionality.

ul.addEventListener("click", handleClickDeleteCheck);
function handleClickDeleteCheck(e) {
  if (e.target.name == "check-button") {
    checkToDo(e);
  }
}

function checkToDo(e) {
  let item = e.target.parentNode;
  console.log(item.innerText);
  let finalTask = document.createElement("ul");
  finalTask.innerHTML = `
          <li>
            ${item.innerText} <button class="delete btn btn-danger">Delete</button>
          </li>
  `;
  completedTask.appendChild(finalTask);
  item.remove();
}

// handleDelete function

completedTask.addEventListener('click', deleteTask)
function deleteTask(e) {
  let item = e.target.parentNode
  item.remove()
}