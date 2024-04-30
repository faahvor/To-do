let todoInput = document.getElementById("input-box");
let todoList = document.getElementById("task-ul");
let dropList = document.getElementById("dropList");
const button = document.getElementById("button")
const checkOptions = document.querySelector(".check");


document.addEventListener('DOMContentLoaded', getTodos())
button.addEventListener("click", buttonClick);
todoList.addEventListener("click", deleteClick);
checkOptions.addEventListener("click", checkTodo);

    function buttonClick(event){
        event.preventDefault();
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("div-items");
          // check button
          const checkButton = document.createElement("button");
          checkButton.innerHTML = `<ion-icon class="icons icon"  name="ellipse-outline"></ion-icon>`;
          checkButton.classList.add("completeBtn");
          todoDiv.appendChild(checkButton);
        // create li
        const li = document.createElement("li");
        li.classList.add("list_items");
        li.innerText = todoInput.value.trim();
        todoDiv.appendChild(li);
        if(todoInput.value === ""){
            return;
        }

        

        // add local storage
        saveTodos(todoInput.value);
        // delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<ion-icon class="icons icon" name="trash-outline"></ion-icon>`;
        deleteButton.classList.add("deleteBtn")
        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);
      
        
        // clear to do input
        todoInput.value = '';

        
    }

    function deleteClick(e){
       const item = e.target;

        // delete to do
       if(item.classList[0] === "deleteBtn"){
        const todo = item.parentElement
        todo.classList.add("down");
        removeTodos(todo);
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
       }
    //    check mark
       if(item.classList[0] === "completeBtn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        

       }
    }
    

    function checkTodo(e) {
        const todos = todoList.children;
        for (let i = 0; i < todos.length; i++) {
            const pick = todos[i];
            switch (e.target.value) {
                case "Tasks":
                    pick.style.display = "grid";
                    break;
                case "completed":
                    if (pick.classList.contains("completed")) {
                        pick.style.display = "grid";
                    } else {
                        pick.style.display = "none";
                    }
                    break;
                case "Uncompleted":
                    if (!pick.classList.contains("completed")) {
                        pick.style.display = "grid";
                    } else {
                        pick.style.display = "none";
                    }
                    
            
            }
        }
    }
    
    function saveTodos(todo){
        let todos;
        if(localStorage.getItem("todos") === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }

        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function getTodos(){
        console.log("hello");
        let todos;
        if(localStorage.getItem("todos") === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        todos.forEach(function(todo){
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("div-items");
              // check button
              const checkButton = document.createElement("button");
              checkButton.innerHTML = `<ion-icon class="icons icon"  name="ellipse-outline"></ion-icon>`;
              checkButton.classList.add("completeBtn");
              todoDiv.appendChild(checkButton);
            // create li
            const li = document.createElement("li");
            li.classList.add("list_items");
            li.innerText = todo;           
            todoDiv.appendChild(li);
            // delete button
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = `<ion-icon class="icons icon" name="trash-outline"></ion-icon>`;
            deleteButton.classList.add("deleteBtn")
            todoDiv.appendChild(deleteButton);
    
            todoList.appendChild(todoDiv);
          
        });
    }
    function removeTodos(todo){
        let todos;
        if(localStorage.getItem("todos") === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        const todoIndex = todo.children[0].innerText;
        todos.splice(todos.indexOf(todoIndex), 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }








   
       
 // keypress function
    
 document.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {
                 event.preventDefault();
                const todoDiv = document.createElement("div");
                todoDiv.classList.add("div-items");
                
                // check button
                const checkButton = document.createElement("button");
                checkButton.innerHTML = `<ion-icon class="icons icon"  name="ellipse-outline"></ion-icon>`;
                checkButton.classList.add("completeBtn");
                todoDiv.appendChild(checkButton);
                
                // create li
                const li = document.createElement("li");
                li.classList.add("list_items");
                li.innerText = todoInput.value.trim();
                todoDiv.appendChild(li);

                if(todoInput.value === ""){
                    return;
                }
        
                // add local storage
                saveTodos(todoInput.value);
        
                // delete button
                const deleteButton = document.createElement("button");
                deleteButton.innerHTML = `<ion-icon class="icons icon" name="trash-outline"></ion-icon>`;
                deleteButton.classList.add("deleteBtn")
                todoDiv.appendChild(deleteButton);
        
                todoList.appendChild(todoDiv);
        
                // clear to do input
                todoInput.value = '';
            }
        })
        
       
        
      
    // function space(){
    //     if()
    // }

    

