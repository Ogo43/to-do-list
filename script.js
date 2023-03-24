//declare functions for add, edit, delete

let task = document.getElementById("todo_task");
const inputText = document.getElementById("todo-input");
let addTask = document.getElementsById("add-input");
let editTask = document.getElementsById("edit-task");
let deleteTask = document.getElementsById("delete-task")


inputText.addEventListener("changeable", (text) => {
    return text;  
})

addTask.addEventListener("click", (listOfTask) => {
    for (let i = 0; i < listOfTask.length; i++) {
        let output = [];
        const singleList = listOfTask[i];
        output.push(singleList);    
    }
    return output;
})

const list = addTask.addEventListener("click", ("Groceries"));
console.log(list);

editTask.addEventListener("click", (editableTask) => {

})

deleteTask.addEventListener("click", (deleteOfTask) => {
    addTask.addEventListener("click", (listOfTask));
    prompt("Delete successful");
})