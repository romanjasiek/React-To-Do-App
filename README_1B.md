# Introducing Events in React

Let's see if we can make something happen when we click one of our `ToDoItems`...

### Instructions:

1. Go to `ToDoItem.js` and **comment out** the current functional component.

2. Write a new **class-based** component with the same name. Try to make it so that when you click one of the `ToDoItems`, you get an `alert()` saying "A To-Do Item was clicked!". 

**Hint:** I would recommend targeting the container `div` element with the `className` "todo-item"...

3. Next, see if you can use the **event object** in your `onClick` function to get an `alert()` containing the text of the **specific** `ToDoItem` you clicked.

**Hint:** You could use one of the properties of `event.target` to find the "text content" of the element you clicked...

4. Finally, comment out your new **class-based** component, and try to achieve Parts 2 and 3 again using your old **functional component**. :-)