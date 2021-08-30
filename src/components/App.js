import React from "react";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import DoneContainer from "./DoneContainer";
import "../css/styles.css";

// Hard coded list of "to do" items
const tasks = [
    { text: "Eat breakfast", done: false },
    { text: "Walk the dog", done: false },
    { text: "Learn about React", done: false },
    { text: "Watch TV", done: false },
    { text: "Read a comic book", done: true },
    { text: "Play video games", done: true },
    { text: "Listen to music", done: true },
    { text: "Drink some water", done: true }
];

const App = () => {
    return (
        <div className="app">
            {/* Child Component 1 - Navigation */}
            <Navigation />
            
            {/* Child Component 2 - ToDosContainer */}
            <ToDosContainer items={tasks.filter(task => task.done == false)}/>

            <DoneContainer items={tasks.filter(task => task.done == true)}/>
        </div>
    );
}

export default App;