const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const tasksList = document.querySelector("#tasksList");
const emptyList = document.querySelector("#emptyList");

form.addEventListener("submit", addTask);
tasksList.addEventListener("click", deleteTask);
tasksList.addEventListener("click", completeTask);

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value;

  const taskHTML = `<li class="list-group-item d-flex justify-content-between task-item">
  <span class="task-title">${taskText}</span>
  <div class="task-item__buttons">
      <button type="button" data-action="done" class="btn-action">
          <img src="./img/tick.svg" alt="Done" width="18" height="18">
      </button>
      <button type="button" data-action="delete" class="btn-action">
          <img src="./img/cross.svg" alt="Done" width="18" height="18">
      </button>
  </div>
</li>`;

  tasksList.insertAdjacentHTML("beforeend", taskHTML);

  taskInput.value = "";
  taskInput.focus();

  if (tasksList.children.length > 1) {
    emptyList.classList.add("none");
  }
}

function deleteTask(event) {
  if (event.target.dataset.action !== "delete") return;

  const removedTask = event.target.closest(".list-group-item");
  removedTask.remove();

  if (tasksList.children.length === 1) {
    emptyList.classList.remove("none");
  }
}

function completeTask(event) {
  if (event.target.dataset.action !== "done") return;

  const completedTask = event.target.closest(".list-group-item");
  const taskTitle = completedTask.querySelector(".task-title");
  taskTitle.classList.toggle("task-title--done");
}
