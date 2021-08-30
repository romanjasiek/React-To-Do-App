# To Do App

## Part 1: Getting Started

Welcome to the To Do app, which we will be using over the coming lessons to learn more about React!

For now, let's get a finished prototype of the app before we start to add extra functionality.

We have already added a list of "To Do" items - let's also implement a list of **"Done"** items, i.e. "To Do" tasks which have been finished.

### Instructions

1. Change the four objects in the **tasks** array so they have an extra property, **`done`**. For these objects, set the value of `done` to `false`. Then, add four additional objects to the **tasks** array representing completed tasks. Set the value of `done` for these objects to `true`.

2. Use the `filter()` array method on the `tasks` array, so only incomplete tasks are filtered. The new array of incomplete tasks should go into a new variable, called `toDos`. Make sure to update your existing components so the incomplete tasks are displaying as you would expect.

3. Using the `ToDoContainer` and `ToDoItem` components as a model, create two new components - `DoneContainer` and `DoneItem`. When you are finished, a second list of **completed** tasks should be rendered underneath the "To Do" list.

To get the most out of the predefined styles when creating your new components:

>- The `className` of the main container div in the `DoneContainer` component should be `done-container`.
>- The `className` of the main container div in the `DoneItem` component should be `done-item`.
>- In the `DoneItem` component, you could use the React-friendly "font-awesome" icon `faRedo` in place of the `faCheck` icon we are using in the `ToDoItem` component.

4. When you are done, you should merge your `main` branch with the new `01-getting-started` branch you have been working on. Navigate to the `main` branch with `git checkout main` and then run the command `git merge 01-getting-started` to merge it with the new branch. 