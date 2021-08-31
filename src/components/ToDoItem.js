import React from "react";
// * Import font-awesome icons - remember to install these modules using NPM before trying to use an icon!
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const checkIcon = <FontAwesomeIcon icon={faCircle} />

const ToDoItem = props => {
    const printToDo = event => {
    event.preventDefault();
    console.log("A To-Do item was clicked");
    console.log("Clicked task: " + event.target.textContent);
    alert(event.target.textContent + " was clicked");
}

     return (
         <div onClick={printToDo} className="todo-item">
             {/* Take the "todo" object received in the "item" prop, and use the value of its "text" property */}
             <p>{props.item.text}</p>
             <div>
                 {/* Use a font awesome icon to render a "check" icon - see line 9 for creating the icon component */}
                 <button className="btn">{checkIcon}</button>
             </div>
         </div>
     );
 }

//  class ToDoItem extends React.Component {
//      printToDo(event) {
//          event.preventDefault();
//          console.log("To-Do item was clicked");
//          console.log(event);
//          alert(event.target.textContent);
//      }
    
//     render() {
//         return (
//             <div onClick={this.printToDo} className="todo-item">
//                 <p>{this.props.item.text}</p>
//                 <button className="btn">{checkIcon}</button>
//             </div>
//         );
//     }
// }

export default ToDoItem;