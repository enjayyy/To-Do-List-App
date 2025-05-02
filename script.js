const inputBox = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

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
        
        // Edit button
        let editButton = document.createElement("button");
        editButton.innerHTML = "✎"; // Pencil icon
        editButton.classList.add("edit-btn");
        li.appendChild(editButton);
        
        // Edit functionality
        editButton.addEventListener("click", function(e) {
            e.stopPropagation();
            const currentText = taskText.textContent;
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            
            // Replace the text with an input field
            taskText.replaceWith(input);
            input.focus();
            
            // Handle when editing is done
            function finishEditing() {
                if (input.value.trim() === "") {
                    alert("Task cannot be empty! Enter some text or delete the task.");
                    input.focus();
                    return;
                }
                
                taskText.textContent = input.value;
                input.replaceWith(taskText);
                
                // Remove event listeners
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
        
        // Toggle completed state
        li.addEventListener("click", function(e) {
            // Only toggle if the click wasn't on a button
            if (e.target === li || e.target === taskText) {
                li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
                li.classList.toggle("checked"); 
            }
        });
        
        // Remove button
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "\u00d7";
        removeButton.classList.add("remove-btn");
        li.appendChild(removeButton);
        
        removeButton.addEventListener("click", function(e) {
            e.stopPropagation();
            listContainer.removeChild(li);
        });
    }
    inputBox.value = "";
}