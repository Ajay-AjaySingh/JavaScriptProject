const todoInput = document.getElementById("todoInput");
const taskList = document.getElementById("tasklist");

function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;


        listItem.addEventListener("click",()=>{
            listItem.classList.toggle("completed");
        })


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", (event) =>{
            event.stopPropagation();
            listItem.remove();
        });

        taskList.appendChild(listItem);
        listItem.appendChild(deleteBtn);

        todoInput.value = "";
    }
}
