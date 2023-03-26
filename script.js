//declare functions for add, edit, delete

const task = document.getElementById("todo_task");
let inputText = document.getElementById("todo-input");
let addTask = document.getElementById("add-input");
let editTask = document.getElementById("edit-task");
let deleteTask = document.getElementById("delete-task")
let todo_wrapper = document.querySelector(".unordered-list");

let todo_arr = []

let generateTemplate = ()=>{
    
    todo_wrapper.innerHTML = "";

    let todo_markup_arr =  todo_arr.map((el, index)=>{
        return `
        <li class="list" id=${index}>
        <input 
        type="text" 
        value=${el}
        disabled
        class="editable-input"
        />
    
        <div class="btn-wrapper">
        <button class="edit" id="edit-task"><i class='bx bx-edit' ></i>Edit</button> 
        <button class="delete" id="delete-task"><i class='bx bx-trash'></i>Delete</button>
        </div> 
        </li>
    `
     })
    todo_markup_arr.forEach(el=>{
        todo_wrapper.insertAdjacentHTML("beforeend", el)    
    })
}

inputText.addEventListener("change", (e) => {
    e.preventDefault();
     todo_arr.push(e.target.value);
     e.target.value="";
     

    generateTemplate();
})

todo_wrapper.addEventListener("click", (e)=>{
    // console.log(e.target.parentNode.parentNode.id)
    // console.log(typeof parseInt(e.target.parentNode.parentNode.id))
    // console.log(e.bubbles)
    let ID = parseInt(e.target.parentNode.parentNode.id)

    let new_todo_arr = todo_arr.slice(0, ID).concat(todo_arr.slice(ID + 1))
    todo_arr = new_todo_arr
    generateTemplate()
})