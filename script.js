const inputBox = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

document.addEventListener('DOMContentLoaded', function() {
    showTask();
});

function addTask() {
    if (inputBox.value === "") {
        alert("Oh? Looks like you need to add a task first!");
    } 
    else {
        const li = document.createElement("li");
        const taskText = document.createElement("span");
        taskText.textContent = inputBox.value;
        taskText.classList.add("task-text");
        
        li.appendChild(taskText);
        listContainer.appendChild(li);
        
        let editButton = document.createElement("button");
        editButton.innerHTML = "✎";
        editButton.classList.add("edit-btn");
        li.appendChild(editButton);
        
        editButton.addEventListener("click", function(e) {
            e.stopPropagation();
            const currentText = taskText.textContent;
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            
            taskText.replaceWith(input);
            input.focus();
            
            function finishEditing() {
                if (input.value.trim() === "") {
                    alert("Task cannot be empty! Enter some text or delete the task.");
                    input.focus();
                    return;
                }
                
                taskText.textContent = input.value;
                input.replaceWith(taskText);
                saveData(); 
                
                input.removeEventListener("blur", finishEditing);
                input.removeEventListener("keypress", handleKeyPress);
            }
            
            function handleKeyPress(e) {
                if (e.key === "Enter") {
                    finishEditing();
                }
            }
            
            input.addEventListener("blur", finishEditing);
            input.addEventListener("keypress", handleKeyPress);
        });
        
  
        li.addEventListener("click", function(e) {
            if (e.target === li || e.target === taskText) {
                li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
                li.classList.toggle("checked"); 
                saveData(); 
            }
        });
        
       
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "\u00d7";
        removeButton.classList.add("remove-btn");
        li.appendChild(removeButton);
        
        removeButton.addEventListener("click", function(e) {
            e.stopPropagation();
            listContainer.removeChild(li);
            saveData(); 
        });
        
        saveData(); 
    }
    inputBox.value = "";
}

function saveData() {
    localStorage.setItem("todoData", listContainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("todoData");
    if (savedData) {
        listContainer.innerHTML = savedData;
        
      
        document.querySelectorAll("#list-container li").forEach(li => {
            const taskText = li.querySelector(".task-text");
            const editButton = li.querySelector(".edit-btn");
            const removeButton = li.querySelector(".remove-btn");
            
            
            editButton.addEventListener("click", function(e) {
                e.stopPropagation();
                const currentText = taskText.textContent;
                const input = document.createElement("input");
                input.type = "text";
                input.value = currentText;
                
                taskText.replaceWith(input);
                input.focus();
                
                function finishEditing() {
                    if (input.value.trim() === "") {
                        alert("Task cannot be empty! Enter some text or delete the task.");
                        input.focus();
                        return;
                    }
                    
                    taskText.textContent = input.value;
                    input.replaceWith(taskText);
                    saveData();
                    
                    input.removeEventListener("blur", finishEditing);
                    input.removeEventListener("keypress", handleKeyPress);
                }
                
                function handleKeyPress(e) {
                    if (e.key === "Enter") {
                        finishEditing();
                    }
                }
                
                input.addEventListener("blur", finishEditing);
                input.addEventListener("keypress", handleKeyPress);
            });
            
          
            li.addEventListener("click", function(e) {
                if (e.target === li || e.target === taskText) {
                    li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
                    li.classList.toggle("checked"); 
                    saveData();
                }
            });
            
            
            removeButton.addEventListener("click", function(e) {
                e.stopPropagation();
                li.remove();
                saveData();
            });
        });
    }
}