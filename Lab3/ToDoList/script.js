const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function createTodoItem(text) {
    const item = document.createElement("div");
    item.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "🗑️";

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            item.classList.add("done");
        } else {
            item.classList.remove("done");
        }
    });

    delBtn.addEventListener("click", function () {
        list.removeChild(item);
    });

    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(delBtn);

    return item;
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const todo = createTodoItem(text);
    list.appendChild(todo);

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
