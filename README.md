![Screenshot (131)](https://github.com/user-attachments/assets/ce7dbfbb-e3d8-489c-bcfe-1c867bae696e)# To-Do List App

A simple and interactive To-Do List application that allows users to manage their daily tasks efficiently. This app is built using **HTML**, **CSS**, and **JavaScript**.

## Features

- **Add New Tasks**: Users can add tasks using the input field and the "Add" button.
- **Mark Tasks as Complete**: Click on a task to mark it as completed (with a strikethrough effect).
- **Delete Tasks**: Remove tasks using a dynamically created delete button.
- **Empty Task Alert**: Alerts the user if they try to add an empty task.
- **Responsive Design**: The app is designed to work seamlessly on different screen sizes.
- **Colorful UI**: A visually appealing interface with a clean layout.

## How It Works

### Main Components
1. **Input Field**: Allows users to type in their tasks.
2. **Add Button**: Triggers the `addTask()` function to add the task to the list.
3. **Task List**: Displays tasks in an unordered list. Each task has:
   - A clickable area to mark it as complete.
   - A delete button to remove the task.

### JavaScript Functionality
- **addTask()**: 
  - Checks if the input field is empty.
  - Creates a new list item (`<li>`) for the task.
  - Adds a delete button (`<button>`) dynamically to each task.
  - Allows tasks to be marked as complete by toggling a CSS class.

- **Remove Button**:
  - Dynamically created for each task.
  - Styled using the `remove-btn` class in CSS.
  - Deletes the task when clicked.

### CSS Styling
- **Task List**: Styled for better readability and user interaction.
- **Remove Button**: A red circular button with hover effects for easy deletion.

### Deployed with netlify: https://floral-to-do-list-app.netlify.app/


## Screenshots
![alt text](<Screenshot (132).png>)
![alt text](<Screenshot (131).png>)
