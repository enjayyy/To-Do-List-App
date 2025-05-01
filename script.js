const inputBox = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ""){
        alert("Oh? Looks like you need to add a task first!");
    } 
    else {
        const li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        li.addEventListener("click", function(){
            li.style.textDecoration="line-through";
            li.classList.toggle("checked"); //checked is a css class that holds the checked img icon

        })
        let removeButton = document.createElement("button");
        removeButton.innerHTML= "\u00d7";
        li.appendChild(removeButton);
        removeButton.addEventListener("click", function(){
            listContainer.removeChild(li);
                })

    }
    inputBox.value = "";
   
}
